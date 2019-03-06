import React from "react";
import "../layout/styles/followButton.css";

const UserButton = props => {
  const { handleClick, text, id_value, canFollow } = props;

  if (!canFollow) {
    return (
      <button
        type="button"
        className={`btn ${
          text === "Following" ? "btn-primary" : "btn-outline-primary"
        } btn-sm btn-outline-primary`}
        id={id_value}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  } else {
    return <div />;
  }
};
export default UserButton;
