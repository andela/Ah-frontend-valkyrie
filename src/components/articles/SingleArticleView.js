import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import CommentList from "../comments/CommentList";
import CreateComment from "../comments/CreateComment";
import RateArticle from "./RateArticle";
import AverageRating from "./AverageRating";

export const SingleArticleView = props => (
  <Fragment>
    <div>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {props.authUser.isAuthenticated
        && props.authUser.user.username == props.article.author.username ? (
          <Fragment>
              <li className="breadcrumb-item">
              <Link className="text-danger" to="/" onClick={props.handleDeleteArticle}>
                Delete
                </Link>
            </li>
              <li className="breadcrumb-item">
              <Link to={`/articles/${props.article.slug}/edit`}> Edit </Link>
            </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="breadcrumb-item">{props.article.title}</li>
            </Fragment>
          )}
      </ul>
    </div>
    <div className="jumbotron rounded-0">
      <h4 className="display-5 text-center display-5">{props.article.title}</h4>
      <strong className="mt-3 mb-3 text-center">
        <i>{`"${props.article.description}"`}</i>
      </strong>
      <div className="card-text mt-5">
        { Parser(String(props.article.body))}
      </div>
      {props.article.tagList.map( ( tag, key ) => (
        <Link
          to={`/search?search=${tag}&searchKey=tag`}
          key={ key }
          className="btn btn-sm btn-outline-primary mr-1 mt-1"
        >
          #
          {tag}
        </Link>
      ) )}
      <hr />
      <p className="card-text">
       <span className="text-primary"> @{ props.article.author.username }</span>&nbsp;
        <i className="font-weight-bold">
          {props.article.read_time}
        </i>
        &nbsp; &nbsp; &nbsp; (
        { props.article.likes.count }
) &nbsp;
        <i className="fa fa-thumbs-up text-success" />
      &nbsp; &nbsp; &nbsp;  (
        { props.article.dislikes.count }
) &nbsp;
        <i className="fa fa-thumbs-down text-danger" />
        &nbsp; &nbsp; &nbsp;
        <i className="far fa-heart text-danger" />
        &nbsp; &nbsp; &nbsp;
        <i className="far fa-bookmark text-primary" />
        &nbsp; &nbsp; &nbsp;
        <i className="fas fa-share-alt text-primary mr-3" />
      </p>
      {!props.authUser.isAuthenticated
      || props.authUser.user.username === props.article.author.username ? (
        <AverageRating avgRate={props.article.average_rating} />
        ) : (
          <RateArticle />
        )}
      <hr />
      {props.authUser.isAuthenticated ? (
        <CreateComment articleSlug={props.article.slug} />
      ) : (
        <Fragment>
          <strong className="text-danger">
            <i className="fa fa-exclamation-triangle" />
            {" "}
You need to login in order to comment on
            this article!
          </strong>
        </Fragment>
      )}
      <CommentList articleSlug={props.article.slug} />
    </div>
  </Fragment>
);

SingleArticleView.propTypes = {
  article: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  handleDeleteArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authUser: state.loginReducer,
});

export default connect(mapStateToProps)(SingleArticleView);
