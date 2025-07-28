import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticleInfo from "./ArticleInfo";
import NotFound from "./NotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
