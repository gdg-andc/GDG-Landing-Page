import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <span className="font-semibold text-gray-900">GDG on Campus ANDC</span>
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Acharya Narendra Dev College
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/gdg-andc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/gdg-on-campus-andc-7062b0334?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/gdg_andc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:gdg.andc@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
