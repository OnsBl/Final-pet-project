import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='page-height'>
    <div>
            <Navbar />
    </div>
    <div  className="container content-container">

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
     
    </div>
 

   </div>
 

  );
};

export default App;
