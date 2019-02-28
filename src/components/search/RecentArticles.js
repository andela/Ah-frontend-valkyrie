import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Loader from "../common/Loader";

export const RecentArticles = ({ articles, isLoading }) => (

  <Fragment>
    <h5> Top 10 Recent Articles</h5>
    <hr />
    { isLoading ? (
      <Loader text="Loading recent articles..." />
    ) : (
      articles.map((article, key) => (
        <Fragment key={key}>
          <Link to={`/articles/${article.slug}`} className="text-primary font-italic">
            {article.title}
          </Link>
          <span className="d-block mt-1 text-md">
            { Parser(String(article.description)) }
          </span>
          <span className="d-block mt-1 text-muted text-sm">
            <Moment parse="YYYY-MM-DD HH:mm">{article.createdAt}</Moment>
          </span>
          <hr />
        </Fragment>
      ),
      )
    )}
  </Fragment>
);

RecentArticles.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RecentArticles;
