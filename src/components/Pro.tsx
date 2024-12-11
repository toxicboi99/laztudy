import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaPhp } from 'react-icons/fa';

const Pro: React.FC = () => {
  useEffect(() => {
    const iconsContainer = document.getElementById('icons-container');
    if (!iconsContainer) {
      console.error('Icons container not found');
      return;
    }

    const interval = setInterval(() => {
      iconsContainer.scrollLeft += 1;
      if (iconsContainer.scrollLeft >= iconsContainer.scrollWidth - iconsContainer.clientWidth) {
        iconsContainer.scrollLeft = 0;
      }
    }, 20); // Adjust the speed by changing the interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div id="icons-container" className="flex space-x-8">
        <FaHtml5 size={48} className="text-orange-500" />
        <FaCss3Alt size={48} className="text-blue-500" />
        <FaJs size={48} className="text-yellow-500" />
        <FaReact size={48} className="text-blue-300" />
        <FaNodeJs size={48} className="text-green-500" />
        <FaPython size={48} className="text-blue-300" />
        <FaJava size={48} className="text-red-500" />
        <FaPhp size={48} className="text-indigo-500" />
        {/* Repeat icons for continuous scrolling effect */}
        <FaHtml5 size={48} className="text-orange-500" />
        <FaCss3Alt size={48} className="text-blue-500" />
        <FaJs size={48} className="text-yellow-500" />
        <FaReact size={48} className="text-blue-300" />
        <FaNodeJs size={48} className="text-green-500" />
        <FaPython size={48} className="text-blue-300" />
        <FaJava size={48} className="text-red-500" />
        <FaPhp size={48} className="text-indigo-500" />
      </div>
    </div>
  );
};

export default Pro;
