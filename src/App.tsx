import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Onboarding from "./pages/Auth/Onboarding";
import FirstStep from "./components/Onboarding/FirstStep";
import Login from "./pages/Auth/Login";
import Feeds from "./pages/Feeds/Feeds";
import AllFeeds from "./components/Feeds/components/AllFeeds";
import Tribes from "./components/Feeds/components/Tribes";
import Tribe from "./pages/Tribe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          {/* Feeds Component */}
          <Route path="/" element={<Feeds />}>
            <Route path="" element={<AllFeeds />} />
          </Route>
          <Route path="/tribes" element={<Tribes />} />
          <Route path="tribe/:id" element={<Tribe />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
