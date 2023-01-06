import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import { Route, Routes } from "react-router-dom"
import Characters from './pages/Characters'



function App() {
  return (
    <div>
      
      
        <Navbar/>
        <Routes>
            <Route path="/" element = {<Characters/>} />

          </Routes>
          
    </div>
  );
}

export default App;
