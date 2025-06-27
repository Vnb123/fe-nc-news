import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getArticleById from "./getArticleById";
import getCommentsByArticleId from "./getCommentsByArticleId";
import patchVotes from "./patchVotes";
import postComment from "./postComment";
import deleteComment from "./deleteComment";
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

    const commentData = {
      username: "grumpy19",
      body: input,
    };

    postComment(article_id, commentData)
      .then((newComment) => {
        if (!newComment.created_at) {
          newComment.created_at = new Date().toISOString();
        }
        if (!newComment.author) {
          newComment.author = commentData.username;
        }
        setComments((currentComments) => [newComment, ...currentComments]);
        setInput("");
        setNewCommentError(false);
        setIsPosted(true);
      })
      .catch((err) => {
        setNewCommentError(true);
        setIsPosted(false);
      });
  }
  function handleDelete(comment_id) {
    deleteComment(comment_id)
      .then(() => {
        setDeleteError(false);
        setComments((currentComments) => {
          return currentComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
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
        </div>
        <p>💬{article.comment_count} Comments</p>
        <section className="adding-comment">
          <form onSubmit={handleSubmit}>
            <label htmlFor="add-comment"></label>
            <input
              id="add-comment"
              required
              type="text"
              onChange={handleInputChange}
              value={input}
            />
            <button id="comment-submit" type="submit">
              Comment
            </button>
            <p>{newCommentError ? "Failed to post" : ""}</p>
            <p>{isPosted ? "Comment posted" : ""}</p>
          </form>
        </section>
      </div>
      <section id="comments">
        <ul>
          {comments.map((comment) => {
            return (
              <li className="comment" key={comment.comment_id}>
                <p>{comment.author}</p>
                <h3>Posted {new Date(comment.created_at).toLocaleString()}</h3>
                <p>{comment.body}</p>
                <p>Vote ⬆️⬇️ {comment.votes}</p>
                {comment.author === "grumpy19" && (
                  <button onClick={() => handleDelete(comment.comment_id)}>
                    🗑️
                  </button>
                )}
                <p>{deleteError ? "Failed to delete comment" : null}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default ArticleInfo;
