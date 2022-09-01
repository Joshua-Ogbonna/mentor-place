import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Onboarding from "./pages/Auth/Onboarding";
import FirstStep from "./components/Onboarding/FirstStep";
import Login from "./pages/Auth/Login";
import Feeds from "./pages/Feeds/Feeds";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          {/* Feeds Component */}
          <Route path="/home" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
