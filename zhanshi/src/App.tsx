import React from 'react';
import Navbar from './zhuoye/Navbar';
import Pwj from './zhuoye/Pwj';
import Lrm from './zhuoye/Lrm';
import Qm from './zhuoye/Qm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Pwj />
      <Lrm />
      <Qm />
     
    </div>
  );
};

export default App;