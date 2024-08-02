import React from 'react';
import './App.css';
import Navbar from './compont/Navbar.jsx';
import Sidebar from './compont/Sidebar.jsx';
import MyRoutes from './compont/MyRoutes.jsx';

const App = () => {
  return (
    
      <div >
        <Navbar />
        <div className='flex pl-1'>
          <Sidebar/>
         
       <MyRoutes/>
       
       </div>
      </div>
   
  );
};

export default App;
