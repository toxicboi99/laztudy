import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-gray-600 dark:text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold text-white dark:text-white">LearnHub</h2>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">Your one-stop destination for learning resources.</p>
          </div>

          {/* Business Details Section */}
          <div>
            <h2 className="text-lg font-semibold text-white dark:text-white">Business Details</h2>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
              Laztudy.<br />
              Education City, EC 45678<br />
              Phone: (+91) 9234670937<br />
              Email: laztudy932@gmail.com
            </p>
          </div>

          {/* Subscribe Mail Section */}
          <div>
            <h2 className="text-lg font-semibold text-white dark:text-white">Subscribe to Our Newsletter</h2>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                className="w-full sm:flex-1 p-2 rounded border border-gray-500 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="text-lg font-semibold text-white dark:text-white">Menu</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
              <li><a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-8 text-center text-sm text-gray-400 dark:text-gray-400">
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
