import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { fetchSingleArticle, updateArticle } from '../../actions/articleActions';
import UpdateArticleForm from './UpdateArticleForm';
import isEmpty from '../utils/isEmpty';

class UpateArticle extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      title: '',
      description: '',
      body: '',
      tagList: '',
      article: {},
      triggerUpdate: false,
    };

    this.handleOnChange = this.handleOnChange.bind( this );
    this.handleOnSubmit = this.handleOnSubmit.bind( this );
    this.handleEditor = this.handleEditor.bind( this );
  }

  componentDidMount() {
    this.props.fetchSingleArticle( this.props.match.params.slug );
  }

  componentWillReceiveProps( nextProps ) {
    const { article } = nextProps.article;
    if ( article ) {
      this.setState( { ...article } );
      this.setState( { article } );
    }
    if ( this.state.triggerUpdate && nextProps.updatedArticle.articles.article ) {
      toast.success( 'Article updated successfully' );
    }
  }

  handleOnChange( event ) {
    this.setState( { [ event.target.name ]: event.target.value } );
  }

  handleEditor( event ) {
    this.setState( {
      body: event,
    } );
  }

  handleOnSubmit( event ) {
    event.preventDefault();
    const article = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      tagList: this.state.tags
        ? this.state.tags.split( ',' ) : this.state.article.tagList,
    };
    this.setState( {
      triggerUpdate: true,
    } );
    this.props.updateArticle( this.state.article.slug, article );
  }

  render() {
    return (
      <Fragment>
        { this.props.authUser.isAuthenticated ? (
          <div>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-9">
                  {isEmpty( this.state.article ) === false ? (
                    <div>
                      <UpdateArticleForm
                        article={ this.state.article }
                        handleOnChange={ this.handleOnChange }
                        handleOnSubmit={ this.handleOnSubmit }
                        handleEditor={ this.handleEditor }
                      />
                    </div>
                  ) : (
                    <div>
                      <strong className="text-danger">Article not found</strong>
                    </div>
                  )}
                </div>
                <div className="col-md-3">
                  <Sidebar />
                </div>
              </div>
            </div>
            <Footer />
            <ToastContainer />
          </div>
        ) : (
          <div>
            <div>
              <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Authentication Required!</h4>
                  <strong className="text-danger">
                      Authentication is required to edit this article.
                  </strong>
                </div>
              </div>
            </div>

          </div>
        )}

      </Fragment>
    );
  }
}

const mapStateToProps = state => ( {
  article: state.articles.articles,
  updatedArticle: state.articles,
  articleError: state.articles.errors,
  authUser: state.loginReducer,
} );

export default connect(
  mapStateToProps, { updateArticle, fetchSingleArticle },
)( UpateArticle );
