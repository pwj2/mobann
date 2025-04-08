import React, { useState } from 'react';

function Lrm() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };

  return (
    <section id="Lrm" className="min-h-screen flex items-center justify-center bg-gray-100"> 
      <div className="container text-center"> 
        <h1 className="text-4xl font-bold mb-8">打王者次数</h1> 
        
        
        <div className="counter mb-8">
          <p className="text-2xl">当前计数: {count}</p> 
          <button 
            onClick={handleIncrement}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xl"
          >
            增加
          </button>
        </div>
  
        <div className="input-section">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="我爱玩王者荣耀"
            className="text-xl p-2 w-64 rounded border" 
          />
          <p className="mt-4 text-2xl">输入的内容: {inputText}</p> 
        </div>
      </div>
    </section>
  );
}

export default Lrm;
    