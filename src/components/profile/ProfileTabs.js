import React from "react";
import ListBookmarks from "../Bookmarks/bookmarkList";
import Following from "../followUser/Followings";
import Followers from "../followUser/Followers";

const ProfileTabs = () => (
  <div className="tab-container">
    <ul className="nav nav-tabs">
      <li className="active">
        <a data-toggle="tab" href="#home">
          Bookmarks
        </a>
      </li>
      <li>
        <a data-toggle="tab" href="#menu1">
          Following
        </a>
      </li>
      <li>
        <a data-toggle="tab" href="#menu2">
          Followers
        </a>
      </li>
      <li>
        <a data-toggle="tab" href="#menu3">
          Menu 3
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div id="home" className="tab-pane fade in active">
        <ListBookmarks />
      </div>
      <div id="menu1" className="tab-pane fade">
        <h3>Following</h3>
        <p>
          <Following />
        </p>
      </div>
      <div id="menu2" className="tab-pane fade">
        <h3>Followers</h3>
        <p>
          <Followers />
        </p>
      </div>
      <div id="menu3" className="tab-pane fade">
        <h3>Menu 3</h3>
      </div>
    </div>
  </div>
);

export default ProfileTabs;
