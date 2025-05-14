import { BsTwitterX, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-gray-300) py-4 px-6">
      <div className="mx-auto flex justify-center space-x-6">
        <a href="https://github.com/yayxs/ai-news" target="_blank" rel="noopener noreferrer" className="hover:text-(--color-gray-500)" aria-label="GitHub">
          <BsGithub className="w-6 h-6" />
        </a>
        <a href="https://x.com/10k_ai" target="_blank" rel="noopener noreferrer" className="hover:text-(--color-gray-500)" aria-label="X">
          <BsTwitterX className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
} 