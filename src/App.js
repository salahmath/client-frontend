import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlyout from './conmponentes/Mainlyout';
import Homepages from './pages/Homepages';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'
import Store from './pages/Store';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlyout />}>
          <Route index element={<Homepages />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<Store />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
