import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-gray-800 rounded-md"></div>
          <span className="font-semibold text-xl">ai-news</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            文档
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            GitHub
          </Link>
          <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors">
            快速开始
          </button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="w-5 h-0.5 bg-gray-600 mb-1"></span>
            <span className="w-5 h-0.5 bg-gray-600 mb-1"></span>
            <span className="w-5 h-0.5 bg-gray-600"></span>
          </button>
        </div>
      </div>
    </header>
  );
} 