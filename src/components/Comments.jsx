function Comment({ comment, handleDelete, deleteError }) {
  return (
    <li className="comment">
      <p>{comment.author}</p>
      <h3>Posted {new Date(comment.created_at).toLocaleString()}</h3>
      <p>{comment.body}</p>
      <p>Vote ⬆️⬇️ {comment.votes}</p>
      {comment.author === "grumpy19" && (
        <button onClick={() => handleDelete(comment.comment_id)}>🗑️</button>
      )}
      <p>{deleteError ? "Failed to delete comment" : null}</p>
    </li>
  );
}
export default Comment;
