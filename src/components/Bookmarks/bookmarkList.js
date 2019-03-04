import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleArticleItem from '../articles/SingleArticleItem';
import { getBookmarks } from './actions/bookmark_actions';

export class ListBookmarks extends Component{
    constructor( props ){
        super( props );
        this.state={
            bookmarks: [],
            bookmarkResultError: false,
        };
    }

    componentDidMount(){
        this.props.getBookmarks( 'article-slug' );
    }

    componentWillReceiveProps( nextProps ){
        if (nextProps.bookmarkError) {
            this.setState({ bookmarkResultError: true })
        }
        if (nextProps.bookmarks){
            this.setState( { 
                bookmarks: nextProps.bookmarks.results,
                bookmarkResultError: false,
            } )
        }
    }

    render() {
        const { bookmarks, bookmarkResultError } = this.state;
        return(
            <Fragment>
                {(bookmarkResultError) ? (
                    <div>
                        <h3>No Bookmarks found for this user</h3>
                    </div>
                ): (
                    <div>
                    <h3>Bookmarks here</h3>
                    { ( bookmarks ).map( ( bookmark, index ) => (
                        <Fragment key={ index }>
                         <SingleArticleItem
                         article={ bookmark.article }
                         bookmarkId={ bookmark.id }
                        />
                        </Fragment>
                    ) ) }   
                </div>
                )}
            </Fragment>
        )
    }
}

ListBookmarks.propTypes = {
    getBookmarks: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    bookmarks: state.bookmarkReducer.bookmarks,
    bookmarkError: state.bookmarkReducer.error,
})

export default connect(mapStateToProps, { getBookmarks })( ListBookmarks);
