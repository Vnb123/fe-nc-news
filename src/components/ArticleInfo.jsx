import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getArticleById from "../api/getArticleById";
import getCommentsByArticleId from "../api/getCommentsByArticleId";
import patchVotes from "../api/patchVotes.js";
import postComment from "../api/postComment.js";
import deleteComment from "../api/deleteComment";
import Comment from "./Comments.jsx";
function ArticleInfo() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [voteError, setVoteError] = useState(false);
  const [input, setInput] = useState("");
  const [newCommentError, setNewCommentError] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    getArticleById(article_id)
      .then((articleObj) => {
        setArticle(articleObj.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsObj) => {
        setComments(commentsObj.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  function handleVoteIncrement() {
    setArticle((article) => ({ ...article, votes: article.votes + 1 }));
    setVoteError(false);
    patchVotes(article_id, 1).catch(() => {
      setArticle((article) => ({ ...article, votes: article.votes - 1 }));
      setVoteError(true);
    });
  }

  function handleVoteDecrement() {
    setArticle((article) => ({ ...article, votes: article.votes - 1 }));
    setVoteError(false);
    patchVotes(article_id, -1).catch(() => {
      setArticle((article) => ({ ...article, votes: article.votes + 1 }));
      setVoteError(true);
    });
  }
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setIsLoading(true);
    const commentData = {
      username: "grumpy19",
      body: input,
    };

    postComment(article_id, commentData)
      .then((data) => {
        const newComment = data.comments[0];
        if (!newComment.created_at) {
          newComment.created_at = new Date().toISOString();
        }
        if (!newComment.author) {
          newComment.author = commentData.username;
        }
        setComments((currentComments) => [newComment, ...currentComments]);
        setNewCommentError(false);
        setIsPosted(true);
        setIsLoading(false);
        setInput("");
        setIsSubmitting(false);

        setTimeout(() => {
          setIsPosted(false);
        }, 3000);
      })
      .catch((err) => {
        setNewCommentError(true);
        setIsPosted(false);
      });
  }
  function handleDelete(comment_id) {
    if (isDeleting) return;
    setIsDeleting(true);
    setIsLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setDeleteError(false);
        setComments((currentComments) => {
          return currentComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        setIsDeleting(false);
        setIsLoading(false);
      })
      .catch(() => {
        setDeleteError(true);
      });
  }

  if (isLoading) {
    return <p>Loading ◌</p>;
  }
  if (error) {
    return <p>Error: {error.msg}</p>;
  }

  return (
    <main className="article-info">
      <h1>{article.title}</h1>
      <div id="article-author-date">
        <p>/{article.topic}</p>
        <p>By {article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
      </div>
      <div id="article-img-body">
        <img src={article.article_img_url} alt="Article Image" />
        <p>{article.body}</p>
      </div>
      <div id="article-vote-comment">
        <div id="vote">
          <span>Vote</span>
          <button type="submit" onClick={handleVoteIncrement}>
            ⬆️
          </button>
          <button type="submit" onClick={handleVoteDecrement}>
            ⬇️
          </button>
          <span>{article.votes}</span>
          <p>{voteError ? "Voting failed" : ""}</p>

          <p>💬{article.comment_count} Comments</p>
        </div>
      </div>
      <section id="comments">
        <div id="comment-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="add-comment"></label>
            <input
              id="add-comment"
              required
              type="text"
              onChange={handleInputChange}
              value={input}
            />
            <button id="comment-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting" : "Comment"}
            </button>
            <p>{newCommentError ? "Failed to post" : ""}</p>
            <p>{isPosted ? "Comment posted" : ""}</p>
          </form>
        </div>

        <ul>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.comment_id}
                comment={comment}
                handleDelete={handleDelete}
                deleteError={deleteError}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default ArticleInfo;
