import React from "react";
import ListBookmarks from "../Bookmarks/bookmarkList";

const ProfileTabs = () => (
  <div className="tab-container">
    <ul className="nav nav-tabs">
      <li className="active"><a data-toggle="tab" href="#home">Bookmarks</a></li>
      &nbsp; &nbsp; &nbsp;
      <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
      &nbsp; &nbsp; &nbsp;
      <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
      &nbsp; &nbsp; &nbsp;
      <li><a data-toggle="tab" href="#menu3 ml-2">Menu 3</a></li>
      &nbsp; &nbsp; &nbsp;
    </ul>
    <div className="tab-content">
      <div id="home" className="tab-pane fade in active">
        <ListBookmarks />
      </div>
      <div id="menu1" className="tab-pane fade">
        <h3>Menu 1</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco l.</p>
      </div>
      <div id="menu2" className="tab-pane fade">
        <h3>Menu 2</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error si.</p>
      </div>
      <div id="menu3" className="tab-pane fade">
        <h3>Menu 3</h3>
        
      </div>
    </div>
  </div>
);

export default ProfileTabs;
