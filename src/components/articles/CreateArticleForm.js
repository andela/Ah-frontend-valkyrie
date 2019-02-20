import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Modules from "../utils/QuilModules";

const CreateArticleForm = props => (
  <Fragment>
    <h4>Create an article</h4>
    <hr />
    <form onSubmit={props.handleOnSubmit}>
      <div className="create-article">
        <div className="form-group">
          <label htmlFor="title">Article title</label>
          <input
            type="text"
            name="title"
            onChange={props.handleOnChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Article Description</label>
          <textarea rows="2" name="description" onChange={props.handleOnChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="body">Article body</label>
          {/* istanbul ignore next */}
          <ReactQuill
            name="articleBody"
            className="textEditor"
            modules={Modules}
            onChange={props.handleEditor}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input type="text" name="tags" onChange={props.handleOnChange} className="form-control" />
        </div>
        <div className="button">
          <button
            type="submit"
            className="btn btn-md btn-primary"
          >
              Publish Article
          </button>
        </div>
      </div>
    </form>
  </Fragment>
);

CreateArticleForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleEditor: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
export default CreateArticleForm;
