
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import HomeSlider from "./components/HomeSlider.jsx";
import Footer from './components/Footer.jsx';
import Category from "./components/Category.jsx";
import CardContainer from "./components/CardContainer.jsx";
import App from './App.jsx';

import React, { usestate , useEffect } from "react";
import Describe from './components/Describe.jsx';


const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/Header' element={<Header/>} />
          <Route path='/HomeSlider' exact element={<HomeSlider/>} />
          <Route path='/Footer' exact element={<Footer/>} />
          <Route path='/Category' exact element={<Category/>} />
          <Route path='/CardContainer' exact element={<CardContainer/>} />
          <Route path='/Describe' exact element={<Describe/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;