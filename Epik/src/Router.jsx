
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import HomeSlider from "./components/HomeSlider.jsx";
import Footer from './components/Footer.jsx';
import Category from "./components/Category.jsx";

import React, { usestate , useEffect } from "react";


const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/Header' element={<Header/>} />
          <Route path='/HomeSlider' exact element={<HomeSlider/>} />
          <Route path='/Footer' exact element={<Footer/>} />
          <Route path='/Category' exact element={<Category/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;