// src/pages/EnhancedSysPage2.tsx
import React, { useState } from 'react';
import MyTitle from '../components/MyTitle';
import EnhancedSidebar from '../components/EnhancedSidebar';

interface Novel {
  title: string;
  author: string;
  popularity: number;
  description: string;
}

const EnhancedSysPage2 = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [novels] = useState<Novel[]>([
    {
      title: "三体",
      author: "刘慈欣", 
      popularity: 9.8,
      description: "中国科幻里程碑作品，讲述地球文明与三体文明的接触与冲突"
    },
    {
      title: "活着",
      author: "余华",
      popularity: 9.7,
      description: "通过普通农民福贵的一生，展现中国社会的历史变迁"
    }
  ]);

  const handleMenuClick = (label: string) => {
    setSelectedMenu(label);
  };

  const sidebarTitle = "成员列表";
  const menuItems = [
    { label: "皮文杰", link: "#pi" },
    { label: "罗荣茂", link: "#luo" },
    { label: "覃猛", link: "#qin" },
    { label: "甘文希", link: "#gan" },
    { label: "莫小鹏", link: "#mo" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <EnhancedSidebar
          title={sidebarTitle}
          menuItems={menuItems}
          onMenuClick={handleMenuClick}
        />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          {selectedMenu === "皮文杰" ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">人气小说推荐</h2>
              {novels.map((novel, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{novel.title}</h3>
                  <p className="text-gray-600">作者：{novel.author}</p>
                  <p className="text-blue-500">人气指数：{novel.popularity}/10</p>
                  <p className="mt-2">{novel.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-8">
              {selectedMenu ? `${selectedMenu}的页面正在建设中...` : "请选择左侧成员查看详情"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSysPage2;