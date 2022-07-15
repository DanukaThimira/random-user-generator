import React from 'react';

import './App.css';
import NameList from './components/NameList'
import About from './components/About';
import Nav from './Nav';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  // const nav = (
  //   <div>
  //     <ul>
  //       <li><Link to='/'>Homw</Link></li>
  //       <li><Link to='/names'>Homw</Link></li>
  //     </ul>
  //   </div>
  // )
  return (
    <div>
      
    <Nav />
    
    <Routes>
      <Route  path='/' element={<About />} />
      <Route  path='names' element={<NameList />} />
    </Routes>
    
    
    
    </div>
  )
  }
   
  

  
    

export default App;
