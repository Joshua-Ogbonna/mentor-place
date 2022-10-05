import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

import "./App.css";
import Home from "./pages/Home";
import Onboarding from "./pages/Auth/Onboarding";
import Login from "./pages/Auth/Login";
import { PrivateAuth, PublicRoute } from "./pages/PrivateAuth";
import CreateEvent from "./components/Events/CreateEvent";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/DashboardComponents/Index";
import NotFound from "./components/404";
import CreateCommunity from "./components/DashboardComponents/CreateCommunity";
import Tribe from "./pages/Tribe";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route element={<PublicRoute />}></Route>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            {/* Feeds Component */}
            <Route path="/" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />} />
              <Route path="/new-community" element={<CreateCommunity />} />
            </Route>
            <Route path="/tribe/:id" element={<Tribe />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route element={<PrivateAuth />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
