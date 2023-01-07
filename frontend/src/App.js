import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import { Route, Routes } from "react-router-dom"
import Characters from './pages/Characters'
import Teams from './pages/Teams'



function App() {
  return (
    <div>
      
      
        <Navbar/>
        <Routes>
        <Route path="/" element = {<Characters/>} />
            <Route path="/characters" element = {<Characters/>} />
            <Route path="/teams" element ={<Teams/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
