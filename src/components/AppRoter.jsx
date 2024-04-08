import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "../pages/Todos";
import Home from "../pages/Home";

const AppRoter = () => {
  return (
    <>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoter;
