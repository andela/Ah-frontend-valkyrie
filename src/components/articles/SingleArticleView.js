import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import { connect } from 'react-redux';

export const SingleArticleView = props => (
  <Fragment>
    <div>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        { props.authUser.isAuthenticated
        && props.authUser.username == props.article.author.username ? (
          <Fragment>
            <li className="breadcrumb-item">
              <Link
                className="text-danger"
                to="/"
                onClick={ props.deleteArticle }
              >
                Delete
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={ `/articles/${ props.article.slug }/edit` }> Edit </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="breadcrumb-item">
              { props.article.title }
            </li>
          </Fragment>
        ) }
      </ul>
    </div>
    <div className="jumbotron rounded-0">
      <h4 className="display-5 text-center display-5">
        { props.article.title }
      </h4>
      <strong className="mt-3 mb-3 text-center">
        <i>{ `"${ props.article.description }"`}</i>
      </strong>
      <div className="card-text mt-5">
        { Parser( String( props.article.body ) )}
      </div>
      {props.article.tagList.map( ( tag, key ) => (
        <button
          type="button"
          key={ key }
          className="btn btn-sm btn-outline-primary mr-1 mt-1"
        >
          #
          {tag}
        </button>
      ) )}
      <hr />
      <p className="card-text">
        <i className="font-weight-bold">
          {props.article.read_time}
        </i>
        &nbsp; &nbsp; &nbsp; ({ props.article.likes.count }) &nbsp;
        <i className="fa fa-thumbs-up text-success" />
      &nbsp; &nbsp; &nbsp;  ({ props.article.dislikes.count }) &nbsp;
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
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </span>
            &nbsp; &nbsp; &nbsp;
        <i className="fas fa-share-alt text-primary" />
      </p>
    </div>
  </Fragment>
);

SingleArticleView.propTypes = {
  article: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = state => ( {
  authUser: state.loginReducer,
} );

export default connect( mapStateToProps )( SingleArticleView );
