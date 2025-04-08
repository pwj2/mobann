import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#about" className="text-xl font-bold text-white">第八组作业</a>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-white hover:text-gray-400">皮文杰</a>
          <a href="#Lrm" className="text-white hover:text-gray-400">罗荣茂</a>
          <a href="#maps" className="text-white hover:text-gray-400">甘文希</a>
          <a href="#modes" className="text-white hover:text-gray-400">莫小鹏</a>
          <a href="#weapon-details" className="text-white hover:text-gray-400">覃猛</a>
          <a href="#stats" className="text-white hover:text-gray-400">朱智宇</a>.
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#about" className="block p-2 text-white hover:bg-gray-600">皮文杰</a>
          <a href="#Lrm" className="block p-2 text-white hover:bg-gray-600">罗荣茂</a>
          <a href="#maps" className="block p-2 text-white hover:bg-gray-600">甘文希</a>
          <a href="#modes" className="block p-2 text-white hover:bg-gray-600">莫小鹏</a>
          <a href="#weapon-details" className="block p-2 text-white hover:bg-gray-600">覃猛</a>
          <a href="#stats" className="block p-2 text-white hover:bg-gray-600">朱智宇</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;