import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addComment } from './actions/actions';

export class CreateComment extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      newCommentBody: '',
    };
  }

  handleOnChange = ( event ) => {
    this.setState( {
      newCommentBody: event.target.value,
    } );
  }

  handleOnSubmit = ( event ) => {
    event.preventDefault();
    const { articleSlug } = this.props;
    const { newCommentBody } = this.state;
    if ( event.target.value !== '' ) {
      const comment = {
        comment: {
          body: newCommentBody,
        },
      };
      this.props.addComment( articleSlug, comment );
    }
    this.resetTextArea();
  }

  resetTextArea = () => {
    this.setState( { newCommentBody: ''} )
  }

  render() {
    const { newCommentBody } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit }>
          <div className="form-group">
            <textarea 
              name="commentBox" 
              onChange={ this.handleOnChange } 
              rows="3" 
              className="form-control" 
              value={ newCommentBody }
              placeholder="Add comment....."
            />
          </div>
          <input type="submit" value="Add comment" className="btn btn-sm btn-primary"/>
        </form>
        {
        }
      </div>
    );
  }
}

CreateComment.propTypes = {
  articleSlug: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  comments: state.comments.comments,
} );

export default connect( mapStateToProps, { addComment } )( CreateComment );