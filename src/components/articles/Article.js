import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SingleArticleItem } from "./SingleArticleItem";
import paginationUtils from "../../utils/paginationUtils";
import { fetchArticles, fetchPaginationArticles } from "../../actions/articleActions";
import Loader from "../common/Loader";
import Pagination from "../pagination/Pagination";
import PageItem from "../pagination/pageItem";
import { baseUrl } from "../utils/http";

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      articlesCount: 0,
      next: null,
      previous: null,
    };
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      isLoading: false,
      articles: nextProps.articles.articles,
      articlesCount: nextProps.articles.articlesCount,
      next: nextProps.articles.links.next,
      previous: nextProps.articles.links.previous,
    });
  }

  getPages = () => {
    const pageNumbers = [];
    const { articlesCount } = this.state;
    for (let i = 1; i <= Math.ceil(articlesCount / 10); i += 1) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  goToLast = () => {
    const lastPage = this.getPages().slice(-1)[0];
    const target = paginationUtils.getTarget(lastPage);
    paginationUtils.currentPage();
    target.classList.add("currentPage");
    const url = `${baseUrl}articles/?page=${lastPage}`;
    this.props.fetchPaginationArticles(url);
  }

  goToSpecificPage = (event) => {
    event.preventDefault();
    paginationUtils.currentPage();
    event.target.classList.add("currentPage");
    const page = parseInt(event.target.innerHTML, 10);
    const url = `${baseUrl}articles/?page=${page}`;
    this.props.fetchPaginationArticles(url);
  }

  goToFirst = (event) => {
    event.preventDefault();
    paginationUtils.currentPage();
    const target = paginationUtils.getTarget(1);
    target.classList.add("currentPage");
    this.props.fetchArticles();
  }

  goToPrevious = () => {
    const { previous } = this.state;
    if (previous !== null) {
      const previousElement = paginationUtils.getPreviousPage();
      const target = paginationUtils.getTarget(previousElement);
      paginationUtils.currentPage();
      target.classList.add("currentPage");
      this.props.fetchPaginationArticles(previous);
    }
  };

  goToNext = (event) => {
    event.preventDefault();
    const { next } = this.state;
    if (next !== null) {
      const nextElement = paginationUtils.getNextPage();
      const target = paginationUtils.getTarget(nextElement);
      paginationUtils.currentPage();
      target.classList.add("currentPage");
      this.props.fetchPaginationArticles(next);
    }
  };

  render() {
    const { articles } = this.state;
    return (
      <Fragment>
        <h4> Recent Articles</h4>
        <hr />
        {this.state.isLoading ? (
          <Loader text="Loading recent articles..." />
        ) : (articles).map(article => (
          <SingleArticleItem
            key={article.id}
            article={article}
          />
        ))}
        <Pagination
          goToLast={this.goToLast}
          goToFirst={this.goToFirst}
          goToNext={this.goToNext}
          goToPrevious={this.goToPrevious}
        >
          {this.getPages()
            .map((page, key) => <PageItem label={page} clicked={this.goToSpecificPage} key={key} />)}
        </Pagination>
      </Fragment>
    );
  }
}

Article.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  fetchPaginationArticles: PropTypes.func.isRequired,
  articles: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { fetchArticles, fetchPaginationArticles })(Article);
