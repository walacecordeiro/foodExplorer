/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Details />} />
      <Route path="/novo-prato" element={<NewDish />} />
    </Routes>
  );
}
