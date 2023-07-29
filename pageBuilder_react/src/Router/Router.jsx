import React, { usestate, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../Pages/App.jsx';
import LoginPage from '../Pages/Login.jsx';
import Page from '../Pages/Page.jsx';
import DropAbleDiv from "../Components/DropAbleDiv.jsx";
import Whitepage from '../Components/WhitePage.jsx';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dad' element={<Whitepage id={1} dropdir={'vertical'} components={[]} />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;