export default function deleteComment(comment_id) {
  return fetch(`https://nc-news-ddg5.onrender.com/api/comments/${comment_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed to delete comment",
      });
    }
    return res;
  });
}
