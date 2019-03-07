import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { addArticle } from "../../actions/articleActions";
import CreateArticleForm from "./CreateArticleForm";

export class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      articleBody: "",
      tags: "",
      image_url: "",
      articleError: "",
      articleCreated: false,
      createError: false,
      otherError: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditor(event) {
    this.setState({
      articleBody: event,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const img_url = this.state.image_url;
    const img = window.localStorage.getItem("newImage");
    const article = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.articleBody,
      tagList: this.state.tags.split(","),
      image_url: img_url !== "" ? img_url : img
    };
    this.props.addArticle(article);
  }

  componentWillReceiveProps(nextProps) {
    const article = nextProps.article.articles;
    if (article) {
      this.props.history.push(`/articles/${article.slug}`);
    } else if (nextProps.articleError) {
      this.setState({ createError: true });
      toast.info("Error while saving your data");
    } else {
      this.setState({ otherError: true });
      toast.warning("Error while saving your data");
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.authUser.isAuthenticated ? (
          <div>
            <div className="container single-item mt-5 mb-5">
              <div className="row">
                <div className="col-md-9">
                  <CreateArticleForm
                    handleOnChange={this.onChangeHandler}
                    handleEditor={this.handleEditor}
                    handleOnSubmit={this.handleOnSubmit}
                  />
                </div>
                <div className="col-md-3">
                  <Sidebar />
                </div>
              </div>
            </div>
            <Footer />
            <ToastContainer />
          </div>
        ) : (
          <div>
            <div className="container mt-5">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Authentication Required!</h4>
                <p>
                  To write an article you must be a logged in user. Create an
                  account with your email or sign up with social media and start
                  writing your articles.{" "}
                </p>
                <hr />
                <p className="mb-0">
                  AUTHORS HAVEN - A social platform for the creative at heart -
                  Bringing together a community of like-minded authors.
                </p>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  article: state.articles,
  articleError: state.articles.errors,
  authUser: state.loginReducer
});

export default connect(
  mapStateToProps,
  { addArticle }
)(CreateArticle);
