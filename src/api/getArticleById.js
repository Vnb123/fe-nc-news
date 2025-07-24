export default function getArticleById(article_id) {
  return fetch(
    `https://nc-news-ddg5.onrender.com/api/articles/${article_id}`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch article",
      });
    }
    return res.json();
  });
}
