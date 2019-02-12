import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dummy from "../../assets/images/dummy.png";
import banner from "../../assets/images/banner.png";
import Footer from "./Footer";
import "../auth/styles/RegisterCSS.css";

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
            <div className="col-md-8">
              <h4>Recent Articles</h4>
              <hr />

              <div className="articles">
                <div className="article-item mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={Dummy} className="img-fluid" alt="Dummy" />
                    </div>
                    <div className="col-md-8">
                      <h4>
                        <Link to="/">
                          <strong>Dummy article title.</strong>
                        </Link>
                      </h4>
                      <p>
                        Aliquam cursus maximus rich text editor mi eu consequat.
                        Nullam tincidunt erat et placerat mattis. Nunc rich text
                        editor congue, enim vitae dictum dignissim, libero nisl
                        sagittis augue, non aliquet nibh tortor sit amet ex.
                        Aliquam cursus maximus mi eu consequat. Nullam tincidunt
                        erat et placerat mattis.
                      </p>
                      <div>
                        <p>
                          <i className="font-weight-bold">5 mins read</i>
                          &nbsp; &nbsp; &nbsp; (5) &nbsp;
                          <i className="fa fa-thumbs-up text-primary" />
                          &nbsp; &nbsp; &nbsp; (3) &nbsp;
                          <i className="fa fa-thumbs-down text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-heart text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-bookmark text-primary" />
                          &nbsp; &nbsp; &nbsp;
                          <span className="text-right color-gold">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </span>
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-share-alt text-primary" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="article-item mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={Dummy} className="img-fluid" alt="Dummy" />
                    </div>
                    <div className="col-md-8">
                      <h4>
                        <Link to="/">
                          <strong>Dummy article title.</strong>
                        </Link>
                      </h4>
                      <p>
                        Aliquam cursus maximus rich text editor mi eu consequat.
                        Nullam tincidunt erat et placerat mattis. Nunc rich text
                        editor congue, enim vitae dictum dignissim, libero nisl
                        sagittis augue, non aliquet nibh tortor sit amet ex.
                        Aliquam cursus maximus mi eu consequat. Nullam tincidunt
                        erat et placerat mattis.
                      </p>

                      <div>
                        <p>
                          <i className="font-weight-bold">5 mins read</i>
                          &nbsp; &nbsp; &nbsp; (5) &nbsp;
                          <i className="fa fa-thumbs-up text-primary" />
                          &nbsp; &nbsp; &nbsp; (3) &nbsp;
                          <i className="fa fa-thumbs-down text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-heart text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-bookmark text-primary" />
                          &nbsp; &nbsp; &nbsp;
                          <span className="text-right color-gold">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </span>
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-share-alt text-primary" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="article-item mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={Dummy} className="img-fluid" alt="Dummy" />
                    </div>
                    <div className="col-md-8">
                      <h4>
                        <Link to="/">
                          <strong>Dummy article title.</strong>
                        </Link>
                      </h4>
                      <p>
                        Aliquam cursus maximus rich text editor mi eu consequat.
                        Nullam tincidunt erat et placerat mattis. Nunc rich text
                        editor congue, enim vitae dictum dignissim, libero nisl
                        sagittis augue, non aliquet nibh tortor sit amet ex.
                        Aliquam cursus maximus mi eu consequat. Nullam tincidunt
                        erat et placerat mattis.
                      </p>

                      <div>
                        <p>
                          <i className="font-weight-bold">5 mins read</i>
                          &nbsp; &nbsp; &nbsp; (5) &nbsp;
                          <i className="fa fa-thumbs-up text-primary" />
                          &nbsp; &nbsp; &nbsp; (3) &nbsp;
                          <i className="fa fa-thumbs-down text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-heart text-danger" />
                          &nbsp; &nbsp; &nbsp;
                          <i className="far fa-bookmark text-primary" />
                          &nbsp; &nbsp; &nbsp;
                          <span className="text-right color-gold">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </span>
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-share-alt text-primary" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Search article..."
                  className="form-control rounded-0"
                />
                <div className="input-group-prepend">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-0"
                  >
                    Search
                  </button>
                </div>
              </div>

              <ul className="list-group mt-3">
                <li className="list-group-item active rounded-0">
                  Featured Authors
                </li>
                <li className="list-group-item rounded-0">Frank</li>
                <li className="list-group-item">Baker</li>
                <li className="list-group-item">Farooq</li>
                <li className="list-group-item">Manzede</li>
                <li className="list-group-item">Miko</li>
                <li className="list-group-item">Tim</li>
                <li className="list-group-item">Lia</li>
              </ul>

              <div className="tags mt-3">
                <h5>Tags</h5>
                <hr />

                <div className="buttons">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag1
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag2
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag3
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag4
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag5
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag6
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag7
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-1 mt-1"
                  >
                    tag8
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Register;
