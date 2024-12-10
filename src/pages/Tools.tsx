import React from 'react';
import { Tool, ExternalLink } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      name: "Code Formatter",
      description: "Format your code with support for multiple languages",
      category: "Development",
      url: "#",
      icon: "🔧"
    },
    {
      name: "Image Optimizer",
      description: "Optimize images for web without quality loss",
      category: "Media",
      url: "#",
      icon: "🖼️"
    },
    {
      name: "JSON Validator",
      description: "Validate and format JSON data",
      category: "Development",
      url: "#",
      icon: "📝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Developer Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{tool.icon}</span>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {tool.category}
                </span>
                <a
                  href={tool.url}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  Try Now <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;