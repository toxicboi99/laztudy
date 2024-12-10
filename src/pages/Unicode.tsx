import React from 'react';
import { Code, Copy } from 'lucide-react';

const Unicode = () => {
  const unicodeExamples = [
    { symbol: "→", code: "U+2192", name: "Rightwards Arrow" },
    { symbol: "♥", code: "U+2665", name: "Black Heart Suit" },
    { symbol: "★", code: "U+2605", name: "Black Star" },
    { symbol: "⚡", code: "U+26A1", name: "High Voltage Sign" },
    { symbol: "⌘", code: "U+2318", name: "Place of Interest Sign" },
    { symbol: "∞", code: "U+221E", name: "Infinity" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Unicode Characters</h1>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unicodeExamples.map((unicode, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{unicode.symbol}</span>
                    <button
                      onClick={() => copyToClipboard(unicode.symbol)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                      title="Copy symbol"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Code size={14} className="mr-1" />
                      <span>{unicode.code}</span>
                    </div>
                    <p className="text-sm font-medium">{unicode.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unicode;