import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Review from './pages/Review/Review';
import Login from './pages/Login/Login';
import Loginkakao from './pages/Loginkakao/Loginkakao';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<Loginkakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
