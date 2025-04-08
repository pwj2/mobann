import React from 'react';

interface Weapon {
  name: string;
  damage: number;
  fireRate: string;
  price: string;
  image: string;
}

const WeaponDetails: React.FC = () => {
  const weapons: Weapon[] = [
    {
      name: "AK-47",
      damage: 36,
      fireRate: "600 RPM",
      price: "$2700",
      image: "/img/ak47.jpg",
    },
    {
      name: "AWP",
      damage: 115,
      fireRate: "41 RPM",
      price: "$4750",
      image: "/img/awp.jpg",
    },
    {
      name: "M4A1",
      damage: 26,
      fireRate: "600 RPM",
      price: "$2900",
      image: "/img/m4a1.jpg",
    },
  ];

  return (
    <section id="weapon-details" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">武器详情</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weapons.map((weapon, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform transform duration-300"
            >
              <img
                src={weapon.image}
                alt={weapon.name}
                className="w-96 h-96 mx-auto mb-4 rounded-lg object-cover" // 进一步调整图片尺寸
              />
              <h3 className="text-xl font-semibold">{weapon.name}</h3>
              <p className="mt-2">伤害：{weapon.damage}</p>
              <p className="mt-2">射速：{weapon.fireRate}</p>
              <p className="mt-2">价格：{weapon.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponDetails;