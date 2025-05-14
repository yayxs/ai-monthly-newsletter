import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* 左侧 Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-semibold">framelink</span>
            </div>
          </div>

          {/* 中间区域 - Community */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium text-sm mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                  Discord
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M10 5H5V19H19V14M14 5H19V10" stroke="currentColor" strokeWidth="2" />
                    <path d="M19 5L9 15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                  X
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M10 5H5V19H19V14M14 5H19V10" stroke="currentColor" strokeWidth="2" />
                    <path d="M19 5L9 15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                  Github
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M10 5H5V19H19V14M14 5H19V10" stroke="currentColor" strokeWidth="2" />
                    <path d="M19 5L9 15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* 右侧区域为空，保持对称性 */}
          <div></div>
        </div>

        {/* 底部区域 - 版权信息和社交媒体图标 */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© Copyright 2025. All rights reserved.</p>
          
          {/* 社交媒体图标 */}
          <div className="flex space-x-4">
            <Link href="#" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9 7.8C17.7 7.2 16.4 6.8 15 6.6C14.8 7 14.6 7.4 14.4 7.8C12.9 7.6 11.5 7.6 10 7.8C9.8 7.4 9.6 7 9.4 6.6C8 6.8 6.7 7.2 5.5 7.8C3.5 11 2.9 14.1 3.2 17.1C4.7 18.2 6.2 18.9 7.6 19.3C8 18.7 8.3 18.1 8.6 17.4C8 17.2 7.4 16.9 6.9 16.6C7 16.5 7.1 16.4 7.2 16.3C9.9 17.5 12.9 17.5 15.6 16.3C15.7 16.4 15.8 16.5 15.9 16.6C15.4 16.9 14.8 17.2 14.2 17.4C14.5 18.1 14.8 18.7 15.2 19.3C16.7 18.9 18.2 18.2 19.6 17.1C20 13.6 19 10.5 17.2 7.8H18.9ZM8.3 15.1C7.5 15.1 6.8 14.3 6.8 13.3C6.8 12.3 7.5 11.5 8.3 11.5C9.1 11.5 9.8 12.3 9.8 13.3C9.8 14.3 9.1 15.1 8.3 15.1ZM15.5 15.1C14.7 15.1 14 14.3 14 13.3C14 12.3 14.7 11.5 15.5 11.5C16.3 11.5 17 12.3 17 13.3C17 14.3 16.3 15.1 15.5 15.1Z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="#" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L4 20M4 6L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="#" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.17 20.1 9.5 21.31V19.2C9.18 19.27 8.88 19.29 8.6 19.23C8.01 19.12 7.53 18.78 7.17 18.24C6.91 17.85 6.47 17.43 6.02 17.48L5.97 16.64C6.86 16.54 7.6 17.14 7.97 17.71C8.18 18.06 8.44 18.26 8.74 18.35C9.03 18.45 9.35 18.44 9.72 18.35C9.78 17.81 10.01 17.34 10.34 17.04C7.62 16.5 6.5 15.03 6.5 13.03C6.5 12.01 6.92 11.08 7.62 10.3C7.43 9.67 7.12 8.38 7.67 7.25C7.67 7.25 8.39 7.07 9.97 8.06C10.62 7.86 11.32 7.76 12.01 7.76C12.7 7.76 13.39 7.86 14.03 8.06C15.61 7.07 16.33 7.25 16.33 7.25C16.88 8.38 16.57 9.67 16.38 10.3C17.08 11.08 17.5 12.01 17.5 13.03C17.5 15.03 16.37 16.5 13.65 17.04C14.11 17.47 14.5 18.34 14.5 19.27V21.31C18.83 20.1 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 