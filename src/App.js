// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Ads from './Ads';
import Login from './Login';
import Registration from './Registration';
import SubmitAd from './SubmitAd';
import FooterMe from './FooterMe';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Ads" element={<Ads />} />
          <Route path="/SubmitAd" element={<SubmitAd />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
        <FooterMe />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
