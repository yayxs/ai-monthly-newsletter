import { categories } from '../data/categories'

export function CategoryList() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">分类</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}