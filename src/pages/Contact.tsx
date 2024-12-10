import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <span>aaravshah932@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <span>+91 9234670937</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <span>Birgunj, Nepal</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p>Always Available for Students Welfare ☺️ </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
