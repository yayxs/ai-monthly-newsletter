-- 页面访问记录表
create table page_views (
  id uuid default gen_random_uuid() primary key,
  page_path text not null,
  user_agent text,
  ip_address text,
  referrer text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 每日访问统计表
create table daily_stats (
  id uuid default gen_random_uuid() primary key,
  date date not null unique,
  total_views bigint default 0,
  unique_visitors bigint default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 工具点击统计表
create table tool_clicks (
  id uuid default gen_random_uuid() primary key,
  tool_id integer not null,
  page_view_id uuid references page_views(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 更新时间触发器
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_daily_stats_updated_at
  before update on daily_stats
  for each row
  execute function update_updated_at_column();
