import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

import "./App.css";
import Home from "./pages/Home";
import Onboarding from "./pages/Auth/Onboarding";
import Login from "./pages/Auth/Login";
import Feeds from "./pages/Feeds/Feeds";
import AllFeeds from "./components/Feeds/components/AllFeeds";
import Tribes from "./components/Feeds/components/Tribes";
import Tribe from "./pages/Tribe";
import { PrivateAuth, PublicRoute } from "./pages/PrivateAuth";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
            </Route>
            {/* Feeds Component */}
            <Route element={<PrivateAuth />}>
              <Route path="/" element={<Feeds />}>
                <Route path="" element={<AllFeeds />} />
              </Route>
              <Route path="/tribes" element={<Tribes />} />
              <Route path="tribe/:id" element={<Tribe />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
