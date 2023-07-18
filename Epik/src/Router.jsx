import React, { usestate, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Header,
  HomeSlider,
  Footer,
  Category,
  CardContainer,
  Describe,
  TestCards,
  Testimonials
} from './components';
import App from './App.jsx';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/FE_Team06_Summer1402/' element={<App />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/HomeSlider' exact element={<HomeSlider />} />
        <Route path='/Footer' exact element={<Footer />} />
        <Route path='/Category' exact element={<Category />} />
        <Route path='/CardContainer' exact element={<CardContainer />} />
        <Route path='/Describe' exact element={<Describe />} />
        <Route path='/Testimonials' exact element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;