import getArticles from "./api";
import { useEffect, useState } from "react";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getArticles()
      .then((articleObj) => {
        setArticles(articleObj.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading ◌</p>;
  }
  if (error) {
    return <p>Error: {error.msg}</p>;
  }
  return (
    <main className="article-list">
      {articles.map((article) => {
        return (
          <article key={article.article_id} className="article-card">
            <p>/{article.topic}</p>
            <h2>{article.title}</h2>
            <div className="author-timestamp">
              <h3>By {article.author}</h3>
              <h3>{new Date(article.created_at).toLocaleString()}</h3>
            </div>
            <img src={article.article_img_url} alt="Article Image" />
            <div className="vote-comment">
              <p>{article.votes} Votes</p>
              <p>{article.comment_count} Comments</p>
            </div>
          </article>
        );
      })}
    </main>
  );
}

export default HomePage;
