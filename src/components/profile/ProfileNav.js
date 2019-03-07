import React from "react";
import profileImage from "../../assets/images/img_avatar.png";
import Subscribe from "../notifications/notify";

const ProfileNav = ({
  profile, isEditAvailable, onClickEdit, onClickClose, newStateAvailable,
}) => (
  <div className="row row-top">
    <div className="col-sm-8 first">
      <h1>{`${profile.first_name} ${profile.last_name}`}</h1>
      <span hidden={isEditAvailable} className="span-edit-button"><a href="#" id="edit-link-btn" className="btn btn-primary" onClick={onClickEdit} role="button">Edit Profile</a></span>
      <span hidden={newStateAvailable} className="span-edit-button"><a href="#" id="close-link-btn" className="btn btn-danger" onClick={onClickClose} role="button"><i className="fas fa-window-close" /></a></span>
      <h5 id="userBio">{profile.bio}</h5>
      <hr />
      <span><a href="#">Following (5)</a></span>
      {" "}
        |
      <span><a href="#">Followers (2)</a></span>
      {" "}
      <div className="mt-5">
        <span><Subscribe /></span>
      </div>
    </div>
    <div className="col-sm-4 col-profile second">
      <img src={profileImage} className="img-profile" alt="Avatar" />
    </div>
  </div>
);

export default ProfileNav;
