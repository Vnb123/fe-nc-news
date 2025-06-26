export default function postComment(article_id, commentData) {
  return fetch(
    `https://nc-news-ddg5.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    }
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to patch votes",
      });
    }
    return res.json();
  });
}
