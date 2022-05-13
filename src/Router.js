import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Review from './pages/Review/Review';
import Login from './pages/Login/Login';
import Loginkakao from './pages/Loginkakao/Loginkakao';
import Footer from './Components/Footer/Footer';

const Router = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<Loginkakao />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </BrowserRouter>
  );
};

export default Router;
