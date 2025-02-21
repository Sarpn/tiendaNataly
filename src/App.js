import React, { useState } from "react";
import WelcomePage from "./components/welcome-page/welcome-page";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellModule from "./components/sell-module/sell-module";
import SellSumary from "./components/sell-summary/sell-summary";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/selling" element={<SellModule />} />
        <Route path="/sell-summary" element={<SellSumary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
