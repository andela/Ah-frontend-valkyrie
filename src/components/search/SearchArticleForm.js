import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SearchArticleForm = ({ defaultValue, onChangeHandler, onSubmitHandler }) => (
  <Fragment>
    <form onSubmit={onSubmitHandler}>
      <div className="input-group mb-3">
        <select
          className="custom-select rounded-0"
          onChange={onChangeHandler}
          name="searchKey"
          id="inputGroupSelect01"
        >
          <option value="all">
                        All
          </option>
          <option value="title">Title</option>
          <option value="tag">Tag</option>
          <option value="author">Author</option>
        </select>
        <input
          defaultValue={defaultValue}
          type="text"
          name="searchTerm"
          onChange={onChangeHandler}
          className="form-control rounded-0"
        />
        <button type="submit" className="btn btn-primary rounded-0">
          <i className="fa fa-search" />
          Search
        </button>
      </div>
    </form>
  </Fragment>
);

SearchArticleForm.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default SearchArticleForm;
