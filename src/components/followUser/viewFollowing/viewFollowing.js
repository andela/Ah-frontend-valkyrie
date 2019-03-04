import React from "react";
import propTypes from "prop-types";
import "./viewFollowing.css";
import UserButton from "../UserButton";

const viewFollowing = props => {
  const {
    Username,
    Bio,
    Image,
    handleClick,
    text,
    id_value,
    canFollow
  } = props;
  return (
    <div className="wrapper">
      <div className="img-div">
        <img src={Image} alt="none" className="img-cls" />
      </div>
      <div className="name-div">
        <p className="U-name">{Username}</p>
        <p className="U-bio">{Bio}</p>
        <p>
          <UserButton
            id_value={id_value}
            handleClick={handleClick}
            canFollow={canFollow}
            text={text}
          />
        </p>
      </div>
    </div>
  );
};
viewFollowing.propTypes = {
  Username: propTypes.string,
  Bio: propTypes.string,
  Image: propTypes.string,
  canFollow: propTypes.bool,
  handleClick: propTypes.func,
  id_value: propTypes.string,
  text: propTypes.string
};
viewFollowing.defaultProps = {
  Username: "",
  Bio: "",
  Image: ""
};
export default viewFollowing;
