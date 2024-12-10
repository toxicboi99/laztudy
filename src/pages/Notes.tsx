import React from 'react';
import { FileText, Download } from 'lucide-react';

const Notes = () => {
  const notes = [
    {
      title: "Data Structures and Algorithms",
      description: "Comprehensive notes covering all major algorithms and data structures",
      category: "Computer Science",
      downloads: 1234,
    },
    {
      title: "JavaScript Fundamentals",
      description: "Essential concepts of JavaScript programming language",
      category: "Web Development",
      downloads: 2341,
    },
    {
      title: "System Design Principles",
      description: "Learn how to design scalable systems and applications",
      category: "Software Engineering",
      downloads: 987,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Study Notes</h1>
        <div className="grid gap-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <FileText className="text-blue-600 mr-2" size={24} />
                    <h3 className="text-xl font-semibold">{note.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{note.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-3">
                    {note.category}
                  </span>
                </div>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                {note.downloads.toLocaleString()} downloads
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;