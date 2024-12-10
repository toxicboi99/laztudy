import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, FileText, Code2, Wrench, Mail, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { signOut } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
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
          <button
            onClick={signOut}
            className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;