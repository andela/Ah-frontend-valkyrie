import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modules from '../utils/QuilModules';

const UpdateArticleForm = props => (
  <Fragment>
    <h4>Edit Article</h4>
    <hr />
    <form onSubmit={ props.handleOnSubmit }>
      <div className="create-article">
        <div className="form-group">
          <label htmlFor="title">Article title</label>
          <input
            type="text"
            name="title"
            defaultValue={ props.article.title }
            onChange={ props.handleOnChange }
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Article Description</label>
          <textarea
            rows="4"
            name="description"
            onChange={ props.handleOnChange }
            className="form-control"
            defaultValue={ props.article.description }
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Article body</label>
          <ReactQuill
            rows="10"
            name="body"
            defaultValue={ props.article.body }
            id="editor"
            modules={ Modules }
            onChange={ props.handleEditor }
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            name="tags"
            defaultValue={ props.article.tagList ? props.article.tagList.toString() : props.article.tagList }
            onChange={ props.handleOnChange }
            className="form-control"
          />
        </div>
        <div className="button">
          <button type="submit" className="btn btn-primary">Update Article</button>
        </div>
      </div>
    </form>
  </Fragment>
);

UpdateArticleForm.propTypes = {
  article: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default UpdateArticleForm;
