import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import EditComment from './EditComment';
import { deleteComment } from './actions/actions';

export class SingleComment extends Component {
  constructor( props ) {
    super( props );
    this.state = { toggleForm: 'd-none'};
  }

  onClickEditArticle = () => { this.shouldToggleForm(); }

  shouldToggleForm = () => {
    if ( this.state.toggleForm === 'd-block' ) {
      this.setState( { toggleForm: 'd-none' } );
    } else {
      this.setState( { toggleForm: 'd-block' } );
    }
  }

  handleOnDelete = () => {
    const { articleSlug, commentId } = this.props;
    this.props.deleteComment( articleSlug, commentId );
  }

  render() {
    const { commentId, articleSlug, commentBody, username, createdOn, } = this.props;
    const { toggleForm } = this.state;
    return (
      <div>
        <div className="single-comment mt-3">
          <p className="comment-text">{ commentBody }</p>
          <div className="actions">
            <i>
              @
              { username }
            </i>
            &nbsp; &nbsp; &nbsp; (0) &nbsp;
            <i className="fa fa-thumbs-up text-success" />
            &nbsp; &nbsp; &nbsp; (0) &nbsp;
            <i className="fa fa-thumbs-down text-danger" />
            &nbsp; &nbsp; &nbsp;
            { this.props.authUser.isAuthenticated && this.props.authUser.user.username === username ? (
              <Fragment>
                <button type="button" onClick={ this.handleOnDelete } className="btn btn-link text-danger">
                  <i className="fas fa-trash-alt" /> &nbsp;Delete
                </button>
                <button type="button" className="btn btn-link text-primary" onClick={ this.onClickEditArticle } >
                  <i className="fas fa-edit" /> &nbsp;Edit
                </button>
              </Fragment>
            ) : '' }
            &nbsp; &nbsp; &nbsp;
            <Link to="/" className="text-primary" />
            &nbsp; &nbsp;
            <span className="text-muted text-small">
              <i>
              <span>Added:</span> &nbsp;
              <Moment  parse="YYYY-MM-DD HH:mm" > { createdOn } </Moment>
              </i>
            </span>
          </div>
          <EditComment
            commentId={ commentId }
            articleSlug={ articleSlug }
            toggleForm={ toggleForm }
            commentBody={ commentBody }
          />
        </div>
      </div>
    );
  }
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
  articleSlug: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
  commentBody: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  authUser: state.loginReducer,
} );

export default connect( mapStateToProps, { deleteComment } )( SingleComment );