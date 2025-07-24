export default function getArticles() {
  return fetch(`https://nc-news-ddg5.onrender.com/api/articles`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to fetch articles",
      });
    }
    return res.json();
  });
}
