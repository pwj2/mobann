import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-400"></h1>
    
        <div className="bg-gray-800 rounded-xl p-8 mb-12 shadow-2xl transition-transform hover:scale-105">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/img/santi.jpg" 
              alt="三体封面"
              className="w-64 h-96 object-cover rounded-lg border-4 border-blue-400"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">三体</h2>
              <div className="space-y-3 text-gray-300">
                <p className="text-xl"><span className="font-semibold text-blue-400">作者：</span>刘慈欣</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">评分：</span>9.8/10</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">出版年：</span>2008年</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">奖项：</span>第73届雨果奖最佳长篇小说</p>
                <p className="text-lg leading-relaxed mt-4">
                  地球文明与三体文明的宇宙级博弈，从文化大革命到宇宙终结的时空史诗，
                  包含黑暗森林法则、降维打击等经典科幻概念，被誉为中国科幻文学的里程碑。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl transition-transform hover:scale-105">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/img/huozhe.jpg" 
              alt="活着封面"
              className="w-64 h-96 object-cover rounded-lg border-4 border-blue-400"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">活着</h2>
              <div className="space-y-3 text-gray-300">
                <p className="text-xl"><span className="font-semibold text-blue-400">作者：</span>余华</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">评分：</span>9.7/10</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">出版年：</span>1993年</p>
                <p className="text-xl"><span className="font-semibold text-blue-400">销量：</span>超过2000万册</p>
                <p className="text-lg leading-relaxed mt-4">
                  通过农民福贵跌宕起伏的一生，展现二十世纪中国社会的沧桑巨变。
                  作品以极简的文字蕴含深刻的生命哲学，被译介为30多种语言，
                  入选"20世纪中文小说100强"。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;