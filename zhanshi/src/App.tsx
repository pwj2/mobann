import React from 'react';
import Navbar from './zhuoye/Navbar';
import Pwj from './zhuoye/Pwj';
import Lrm from './zhuoye/Lrm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Pwj />
      <Lrm />
     
    </div>
  );
};

export default App;