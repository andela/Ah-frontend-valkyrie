import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bookmarkAction, unBookmark, getBookmarks } from "./actions/bookmark_actions";

export class BookmarkArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      error: "",
      bookmarked: false,
      bookmarkedArticleId: 0,
      icon_state: "fas fa-bookmark text-secondary",
    };
  }

  handleOnClick = () => {
    const { articleSlug } = this.props;
    const { bookmarkedArticleId } = this.state;
    if (bookmarkedArticleId === 0) {
      this.props.bookmarkAction(articleSlug);
    } else {
      this.props.unBookmark(articleSlug, bookmarkedArticleId);
    }
  };

  componentDidMount = () => {
    this.props.getBookmarks("article");
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.bookmarkedArticleError) {
      this.setState({
        bookmarkResultError: nextProps.bookmarkedArticleError,
        icon_state: "fas fa-bookmark text-primary",
      });
    } else if (nextProps.bookmarkedArticle) {
      this.setState({
        bookmarks: nextProps.bookmarkedArticle,
        icon_state: "fas fa-bookmark text-primary",
        bookmarked: true,
      });
    }

    if (nextProps.unBookmark) {
      this.props.getBookmarks("article");
    }

    const { articleSlug } = this.props;
    if (nextProps.bookmarks.results) {
      const { results } = nextProps.bookmarks;
      const foundValue = results.filter(bookmark => bookmark.article.slug === articleSlug);
      if (foundValue.length > 0) {
        this.setState({
          icon_state: "fas fa-bookmark text-primary",
          bookmarkedArticleId: foundValue[0].id,
        });
      } else {
        this.setState({ icon_state: "fas fa-bookmark text-secondary" });
      }
    }
  }

  render() {
    const { icon_state } = this.state;
    return (
      <Fragment>
        <i className={icon_state} onClick={this.handleOnClick} />
      </Fragment>
    );
  }
}

BookmarkArticle.propTypes = {
  bookmarkAction: PropTypes.func.isRequired,
  getBookmarks: PropTypes.func.isRequired,
  unBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmarkedArticle: state.bookmarkReducer.bookmarks,
  bookmarkedArticleError: state.bookmarkReducer.error,
  bookmarks: state.bookmarkReducer.bookmarks,
  unBookmark: state.bookmarkReducer.unbookmark,
});

export default connect(
  mapStateToProps,
  { bookmarkAction, unBookmark, getBookmarks },
)(BookmarkArticle);
