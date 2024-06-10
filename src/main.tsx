import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens";
import "./index.css";
import "react-toastify/ReactToastify.css";

import RootLayout from "./components/Layout";
// import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>
    </RootLayout>
  </React.StrictMode>
);
