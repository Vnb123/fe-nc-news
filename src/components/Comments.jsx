import { RiDeleteBin6Line } from "react-icons/ri";

function Comment({ comment, handleDelete, deleteError }) {
  return (
    <li className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.author}, </span>
        <span>posted {new Date(comment.created_at).toLocaleString()}</span>
      </div>
      <p>{comment.body}</p>
      <p>Vote ⬆️⬇️ {comment.votes}</p>
      {comment.author === "grumpy19" && (
        <button
          className="delete-icon"
          onClick={() => handleDelete(comment.comment_id)}
        >
          <RiDeleteBin6Line />
        </button>
      )}
      <p>{deleteError ? "Failed to delete comment" : null}</p>
    </li>
  );
}
export default Comment;
