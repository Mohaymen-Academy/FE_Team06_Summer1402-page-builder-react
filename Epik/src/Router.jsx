
import { BrowserRouter as Router, Routes, Route , BrowserRouter } from 'react-router-dom'
import Header from "./components/Header.jsx";
import HomeSlider from "./components/HomeSlider.jsx";
import Category from "./components/Category.jsx";


import React, { usestate , useEffect } from "react";


const AppRouter = () => {
  return (
      <Router>
        <Routes>
          <Route path='/Header' exact element={<LandingPage/>} />
          <Route path='/HomeSlider' exact element={<LandingPage/>} />
          <Route path='/Category' exact element={<LandingPage/>} />
        </Routes>
      </Router>
  );
};

export default AppRouter;