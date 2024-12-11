import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, FileText, Code2, Wrench, Mail, LogOut, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar: React.FC = () => {
  const { signOut } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 flex items-center">
              <Home size={24} />
              <span className="ml-2">LearnHub</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
          <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/courses" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <BookOpen size={20} />
              <span>Courses</span>
            </Link>
            <Link to="/notes" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <FileText size={20} />
              <span>Notes</span>
            </Link>
            <Link to="/unicode" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Code2 size={20} />
              <span>Unicode</span>
            </Link>
            <Link to="/tools" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Wrench size={20} />
              <span>Tools</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <button
              onClick={signOut}
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-blue-600 focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 px-4 pb-4">
          <Link to="/courses" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
            <BookOpen size={20} />
            <span>Courses</span>
          </Link>
          <Link to="/notes" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
            <FileText size={20} />
            <span>Notes</span>
          </Link>
          <Link to="/unicode" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
            <Code2 size={20} />
            <span>Unicode</span>
          </Link>
          <Link to="/tools" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
            <Wrench size={20} />
            <span>Tools</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
            <Mail size={20} />
            <span>Contact</span>
          </Link>
          <button
            onClick={signOut}
            className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
