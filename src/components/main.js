import React, { useState } from "react";
import Header from "./header";
import About from "./about";
import Connect from "./connect";
import Footer from "./footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <div className="container content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
