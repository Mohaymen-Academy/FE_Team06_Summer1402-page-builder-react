import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import routes from "./Routes/Routes";
import ErrorPage from '../Pages/ErrorPage.jsx';

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("login");
    if (token) {
      setIsAuth(true);
      console.log("token", token);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.Private ? (
                isAuth ? (
                  <route.component />
                ) : (
                  <ErrorPage/>
                )
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;