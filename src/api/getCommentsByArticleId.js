export default function getCommentsByArticleId(article_id) {
  return fetch(
    `https://nc-news-ddg5.onrender.com/api/articles/${article_id}/comments`
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
