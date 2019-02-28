import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Loader from "../common/Loader";
import SingleArticleItem from "../articles/SingleArticleItem";

const SearchArticleData = ({
  searching, searchTerm, searchKey, articles, defaultValue,
}) => (
  <Fragment>
    {
      searching === true ? (
        <Loader text="Searching articles list..." />
      ) : (
        (articles).length < 1 ? (
          <Fragment>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong className="text-danger">
                                No &nbsp;
                {searchKey === "all" ? "article" : searchKey }
                                &nbsp; matches &nbsp;
                {searchTerm || defaultValue}
              </strong>
            </div>
          </Fragment>
        ) : (
          (articles).map((article, key) => (
            <SingleArticleItem
              key={key}
              article={article}
            />
          ),
          )
        )
      )
    }
  </Fragment>
);

SearchArticleData.propTypes = {
  searching: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchKey: PropTypes.string.isRequired,
  articles: PropTypes.instanceOf(Object).isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default SearchArticleData;
