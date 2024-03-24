import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Mainlyout from './conmponentes/Mainlyout';
import About from './pages/About';
import Blogpage from './pages/Blogpage';
import Blogs from './pages/Blogs';
import Chekout from './pages/Chekout';
import Compareproduct from './pages/Compareproduct';
import Contact from './pages/Contact';
import Forgotpassword from './pages/Forgotâssword';
import Homepages from './pages/Homepages';
import ListLove from './pages/ListLove';
import Login from './pages/Login';
import Privcepolicy from './pages/Privcepolicy';
import RefundPolicy from './pages/RefundPolicy';
import Register from './pages/Register';
import Resetpassword from './pages/Resetpassword';
import Shippingpolicy from './pages/Shippingpolicy';
import Singleproduit from './pages/Singleproduit';
import Store from './pages/Store';
import Termconditions from './pages/Termconditions';
import Cartes from './pages/cartes';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlyout />}>
            <Route path='/' element={<Homepages />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<Store />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='compare' element={<Compareproduct />} />
            <Route path='Panier' element={<ListLove />} />
            <Route path='Login' element={<Login />} />
            <Route path='reset-password' element={<Resetpassword />} />
            <Route path='register' element={<Register />} />
            <Route path='terme_et_condition' element={<Termconditions />} />
            <Route path='politique_de_confidentialité' element={<Privcepolicy />} />
            <Route path='politique_dexpédition' element={<Shippingpolicy />} />
            <Route path='politique_de_remboursement' element={<RefundPolicy />} />
            <Route path='blog/:id' element={<Blogpage />} />
            <Route path='chekout' element={<Chekout />} />
            <Route path='forgot-password' element={<Forgotpassword />} />
            <Route path='produit/:id' element={<Singleproduit />} />
            <Route path='carte' element={<Cartes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
