import React from "react";
import Moment from "react-moment";

const CommentHistory = (commentHistory) => {
  const history = commentHistory.commentHistory;
  return (
    <div className="verticle-scroll-bar">
      {history.length > 0
        ? history.map(comment => (
          <div key={comment.id} className="comment-history">
            <div className="text-muted font-italic">
              <span>Modified at: </span>
              <Moment format="dddd, MMMM Do YYYY">{comment.created_at}</Moment>
            </div>
            <div>{comment.body}</div>
          </div>
        ))
        : ""}
    </div>
  );
};

export default CommentHistory;
