import React, { Fragment } from "react";
import Parser from "html-react-parser";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dummy from "../../assets/images/dummy.png";
import AverageRating from "./AverageRating";

export const SingleArticleItem = props => (
  <Fragment>
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Dummy} className="card-img img-thumbnail img-fluid rounded-0" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/articles/${props.article.slug}`}>{props.article.title}</Link>
            </h5>
            <p className="card-text">{Parser(String(props.article.description))}</p>
            <p className="card-text text-small text-muted">
              <i className="font-weight-light text-sm mr-3">
                {props.article.comments.length}
                &nbsp; Comments
              </i>
              <i className="font-weight-bold mr-3">{props.article.read_time}</i>
(
              {props.article.likes.count}
              )&nbsp;
              <i className="fa fa-thumbs-up text-primary mr-3" />
(
              {props.article.dislikes.count}
                  ) &nbsp;
              <i className="fa fa-thumbs-down text-danger" />
                  &nbsp; &nbsp; &nbsp;
              <i className="far fa-heart text-danger" />
                  &nbsp; &nbsp; &nbsp;
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
            <AverageRating avgRate={props.article.average_rating} />
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        <small className="text-muted">
          Created &nbsp;
          <Moment fromNow>{props.article.createdAt}</Moment>
        </small>
      </div>
    </div>
  </Fragment>
);

SingleArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SingleArticleItem;
