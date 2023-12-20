import React, { useState } from "react";
import commentStyle from "./comment.module.css";

const CommentInput = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <article className={commentStyle.commentWrapper}>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className={commentStyle.commentInput}
        />
        <button onClick={handleAddComment}>댓글 추가</button>
      </div>
    </article>
  );
};

export default CommentInput;
