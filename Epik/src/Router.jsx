
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import HomeSlider from "./components/HomeSlider.jsx";
import Category from "./components/Category.jsx";


import React, { usestate , useEffect } from "react";


const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/Header' element={<Header/>} />
          <Route path='/HomeSlider' exact element={<HomeSlider/>} />
          <Route path='/Category' exact element={<Category/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;