import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getArticleById from "./getArticleById";
function ArticleInfo() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((articleObj) => {
        console.log(articleObj);
        setArticle(articleObj.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) {
    return <p>Loading ◌</p>;
  }
  if (error) {
    return <p>Error: {error.msg}</p>;
  }

  return (
    <main className="article-info">
      <p>/{article.topic}</p>
      <h1>{article.title}</h1>
      <h3>By {article.author}</h3>
      <h3>{new Date(article.created_at).toLocaleString()}</h3>
      <img src={article.article_img_url} alt="Article Image" />
      <p>{article.body}</p>
      <p>{article.votes} Votes</p>
      <p>{article.comment_count} Comments</p>
    </main>
  );
}
export default ArticleInfo;
