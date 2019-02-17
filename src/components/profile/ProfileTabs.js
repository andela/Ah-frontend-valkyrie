import React from "react";

const ProfileTabs = () => (
  <div className="tab-container">
    <ul className="nav nav-tabs">
      <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
      <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
      <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
      <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
    </ul>
    <div className="tab-content">
      <div id="home" className="tab-pane fade in active">
        <h3>HOME</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
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
        <p>Eaque ipsa quae ab illo inventore veritatis et quasi.</p>
      </div>
    </div>
  </div>
);

export default ProfileTabs;
