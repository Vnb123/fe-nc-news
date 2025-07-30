import { RiDeleteBin6Line } from "react-icons/ri";

function Comment({ comment, handleDelete, deleteError, handleCommentVote }) {
  return (
    <li className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.author}, </span>
        <span>posted {new Date(comment.created_at).toLocaleString()}</span>
      </div>
      <p>{comment.body}</p>
      <div>
        <span>Vote</span>
        <button
          type="submit"
          onClick={() => handleCommentVote(comment.comment_id, 1)}
        >
          ⬆️
        </button>
        <button
          type="submit"
          onClick={() => handleCommentVote(comment.comment_id, -1)}
        >
          ⬇️
        </button>
        <span>{comment.votes}</span>
      </div>
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
