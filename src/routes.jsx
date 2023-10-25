import React from "react";
import Home from "./pages/Navbar";
import LogoutPage from "./pages/logoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
