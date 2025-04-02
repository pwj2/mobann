import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "皮文杰", link: "#pi" },
    { label: "罗荣茂", link: "#luo" },
    { label: "覃猛", link: "#qin" },
    { label: "甘文希", link: "#gan" },
    { label: "莫小鹏", link:"#mo"},
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <div className='flex flex-row'>
              成员组件区

          </div>
        </div>
      </div>
    </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */