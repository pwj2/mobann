import React, { useState } from 'react';

interface Weapon {
  name: string;
  damage: number;
  fireRate: string;
  price: string;
  image: string;
}

const WeaponDetails: React.FC = () => {

  const [currentLetter, setCurrentLetter] = useState<string>('A');
  
  const weapons: Weapon[] = [
   
  ];


  const generateRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setCurrentLetter(alphabet[randomIndex]);
  };

  return (
    <section id="weapon-details" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <div className="mb-12">
          <div className="text-6xl font-bold mb-4 text-blue-400">{currentLetter}</div>
          <button 
            onClick={generateRandomLetter}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            生成随机字母
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8">猜猜下一个是哪个</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        </div>
      </div>
    </section>
  );
};

export default WeaponDetails;