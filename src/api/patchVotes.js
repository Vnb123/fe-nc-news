export default function patchVotes(article_id, incVotes) {
  return fetch(`https://nc-news-ddg5.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes: incVotes }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to patch votes",
      });
    }
    return res.json();
  });
}
