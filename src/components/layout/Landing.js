import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dummy from "../../assets/images/dummy.png";
import banner from "../../assets/images/banner.png";
import Footer from "./Footer";
import "../auth/styles/RegisterCSS.css";
import Sidebar from "./Sidebar";
import Article from "../articles/Article";
import Navbar from "./Navbar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const auth_token = localStorage.getItem("auth_token");
    let hide;
    return (
      <div>
        <div className="banner">
          <img src={banner} alt="banner" />
          <div className="container text-center text-white banner-content">
            <h1 className="banner-text display-6 pt-3">
              A social platform for the creative at heart - Bringing together a
              community of like-minded authors.
            </h1>
            {auth_token !== null ? (hide = true) : ""}
            <Link
              className="btn btn-lg bg-white font-weight-bold mt-5"
              hidden={hide}
              to="/users/register"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-9">
              <Article />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Register;
