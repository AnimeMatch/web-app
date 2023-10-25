import React from "react";
import Main from "./pages/main";
import LogoutPage from "./pages/logoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/LogoutPage" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
