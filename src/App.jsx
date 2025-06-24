import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
