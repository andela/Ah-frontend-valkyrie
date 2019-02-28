import React from "react";
import TextInputField from "../common/TextInputField";

const EditProfileForm = ({
  profile, onSubmit, changed, firstName, lastName, username, bio
}) => (
  <div className="row">
    <div className="col-sm-8 first">
      <h3>Edit Profile</h3>
      <hr />
      <form onSubmit={onSubmit} method="post">
        <TextInputField
          name="firstName"
          placeholder="First Name"
          type="text"
          label="First Name"
          value={firstName}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <TextInputField
          name="lastName"
          placeholder="Last Name"
          type="text"
          label="Last Name"
          value={lastName}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <TextInputField
          name="username"
          placeholder="Username"
          type="text"
          label="Username"
          value={username}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Bio</label>
          <textarea
            className="form-control"
            id="bio"
            rows={3}
            name="bio"
            value={bio}
            onChange={changed}
          />
        </div>

        <button type="submit" className="btn btn-primary" id="submit-btn">
          Update Profile
        </button>
      </form>
    </div>

    <div className="col-sm-4 second">
      <h3>Profile Details</h3>
      <hr />
      <div className="info-group">
        <label htmlFor="firstName">First Name</label>
        <br />
        <span>{profile.first_name}</span>
      </div>

      <div className="info-group">
        <label htmlFor="lastName">Last Name</label>
        <br />
        <span>{profile.last_name}</span>
      </div>

      <div className="info-group">
        <label htmlFor="email">Email</label>
        <br />
        <span>
          {" "}
          {profile.email}
          {" "}
        </span>
      </div>

      <div className="info-group">
        <label htmlFor="username">Username</label>
        <br />
        <span>{profile.username}</span>
      </div>
    </div>
  </div>
);

export default EditProfileForm;
