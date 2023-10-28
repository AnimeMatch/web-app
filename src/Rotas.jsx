import React from "react";
import LogoutPage from "./pages/logoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LogoutPage" element={<LogoutPage />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
