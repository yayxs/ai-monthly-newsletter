-- 增加每日统计的函数
create or replace function increment_daily_stats(view_date date, visitor_ip text)
returns void as $$
declare
  is_new_visitor boolean;
begin
  -- 检查是否是新访客
  select not exists(
    select 1 from page_views
    where date(created_at) = view_date
    and ip_address = visitor_ip
    and created_at < now()
  ) into is_new_visitor;

  -- 插入或更新每日统计
  insert into daily_stats (date, total_views, unique_visitors)
  values (view_date, 1, case when is_new_visitor then 1 else 0 end)
  on conflict (date)
  do update set
    total_views = daily_stats.total_views + 1,
    unique_visitors = daily_stats.unique_visitors + case when is_new_visitor then 1 else 0 end;
end;
$$ language plpgsql;

-- 获取热门工具的函数
create or replace function get_popular_tools()
returns table (
  tool_id integer,
  clicks bigint
) as $$
begin
  return query
  select tc.tool_id, count(*) as clicks
  from tool_clicks tc
  group by tc.tool_id
  order by clicks desc
  limit 5;
end;
$$ language plpgsql;

-- 获取工具统计的函数
create or replace function get_tool_stats(limit_count integer)
returns table (
  tool_id integer,
  clicks bigint
) as $$
begin
  return query
  select tc.tool_id, count(*)::bigint as clicks
  from tool_clicks tc
  group by tc.tool_id
  order by clicks desc
  limit limit_count;
end;
$$ language plpgsql;
