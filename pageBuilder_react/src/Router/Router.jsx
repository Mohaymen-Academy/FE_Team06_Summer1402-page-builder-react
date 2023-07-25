import React, { usestate, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../Pages/App.jsx';
import LoginPage from '../Pages/Login.jsx';
import Page from '../Pages/Page.jsx';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/page1' element={<Page pagename="page1" />} />
        <Route path='/page2' element={<Page pagename="page2" />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;