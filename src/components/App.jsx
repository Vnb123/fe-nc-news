import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticleInfo from "./ArticleInfo";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleInfo />} />
      </Routes>
    </>
  );
}

export default App;
