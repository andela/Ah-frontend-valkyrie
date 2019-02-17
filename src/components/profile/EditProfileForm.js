import React from "react";
import TextInputField from "../common/TextInputField";
import store from "../../store";

const EditProfileForm = ({ profile, onSubmit, changed }) => (
  <div className="row">
    <div className="col-sm-8 first">
      <h3>Edit Profile</h3>
      <hr />
      <form onSubmit={onSubmit} method="post">
        <TextInputField
          name="firstName"
          placeholder="John"
          type="text"
          label="First Name"
          value={profile.first_name}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <TextInputField
          name="lastName"
          placeholder="Doe"
          type="text"
          label="Last Name"
          value={profile.last_name}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <TextInputField
          name="username"
          placeholder="johndoe"
          type="text"
          label="Username"
          value={profile.username}
          classname="form-control form-control-lg"
          icon="fa fa-user"
          changed={changed}
        />

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Bio</label>
          <textarea className="form-control" id="bio" rows={3} name="bio" defaultValue={profile.bio} onChange={changed} />
        </div>

        <button type="submit" className="btn btn-primary" id="submit-btn">Update Profile</button>
      </form>
    </div>

    <div className="col-sm-4 second">
      <h3>Profile Details</h3>
      <hr />
      <div className="info-group">
        <label htmlFor="firstName">First Name</label>
        <br />
        <span>{ profile.first_name }</span>
      </div>

      <div className="info-group">
        <label htmlFor="lastName">Last Name</label>
        <br />
        <span>{ profile.last_name }</span>
      </div>

      <div className="info-group">
        <label htmlFor="email">Email</label>
        <br />
        <span>
          {" "}
          { store.getState().loginReducer.email }
          {" "}
        </span>
      </div>

      <div className="info-group">
        <label htmlFor="username">Username</label>
        <br />
        <span>{ profile.username }</span>
      </div>

    </div>
  </div>
);


export default EditProfileForm;
