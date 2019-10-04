import React from 'react';
import NavBar from './Component/NavBar'
import { DarkMode } from '../src/Hooks/DarkMode'

import './App.css';
import WomenWorldCup from './Component/WomenWorldCup';



const App = () => {

  const [mode, toggleMode] = DarkMode('dark-mode', false)

   return (
     <div className={`App ${(mode === true ? 'dark-mode' : '')}`}>
     <NavBar
       toggleMode={toggleMode}
       darkMode={mode}
     />
     <WomenWorldCup />
   </div>
   )
}
 


export default App;
