import React from 'react';

const Weapons: React.FC = () => {
  return (
    <section id="weapons" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">武器分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">手枪</h3>
            <p className="mt-2">如 Glock-18、USP-S 等。</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">步枪</h3>
            <p className="mt-2">如 AK-47、M4A1 等。</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold">狙击枪</h3>
            <p className="mt-2">如 AWP、Scout 等。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weapons;