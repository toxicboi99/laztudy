import React from 'react';
import { ArrowRight } from 'lucide-react';
import Slider from '../components/slider';
import Pro from '../components/Pro';
import Footer from '../components/Footer';
const Home: React.FC = () => {
  return (
    <>
    <Slider />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to LearnHub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for learning resources, tools, and educational content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Online Learning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Premium Courses</h3>
            <p className="text-gray-600 mb-4">Access high-quality courses taught by industry experts.</p>
            <a href="/courses" className="text-blue-600 flex items-center hover:text-blue-800">
              Browse Courses <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Study Notes"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Study Notes</h3>
            <p className="text-gray-600 mb-4">Comprehensive study materials for better understanding.</p>
            <a href="/notes" className="text-blue-600 flex items-center hover:text-blue-800">
              View Notes <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer Tools"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
            <p className="text-gray-600 mb-4">Essential tools and resources for developers.</p>
            <a href="/tools" className="text-blue-600 flex items-center hover:text-blue-800">
              Explore Tools <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  <Pro />
  <br></br>
  <Footer />
    </>
  );
};

export default Home;