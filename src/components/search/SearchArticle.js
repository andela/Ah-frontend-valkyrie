import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "../layout/Footer";
import { fetchSearchArticle, fetchArticles } from "../../actions/articleActions";
import SearchArticleForm from "./SearchArticleForm";
import SearchArticleData from "./SearchArticleData";
import { RecentArticles } from "./RecentArticles";

export class SearchArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "all",
      searchTerm: "",
      searching: true,
      searchError: "",
      searchedArticles: [],
      sidebarArticles: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(location.search);
    let { searchKey, searchTerm } = this.state;
    searchTerm = params.get("search") ? params.get("search") : searchTerm;
    this.setState({ defaultValue: searchTerm, isLoading: true });
    this.props.fetchSearchArticle(searchTerm, searchKey);
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searching: false, isLoading: false });
    if (nextProps.searchedArticles.results) {
      this.setState({ searchedArticles: nextProps.searchedArticles.results });
    }
    if (nextProps.sidebarArticles.articles) {
      this.setState({ sidebarArticles: nextProps.sidebarArticles.articles });
    }
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ searching: true });
    const { searchTerm, searchKey } = this.state;
    this.props.fetchSearchArticle(searchTerm, searchKey);
  }

  render() {
    const {
      searchKey, searchTerm, searching, searchedArticles, sidebarArticles,
      isLoading, defaultValue,
    } = this.state;
    return (
      <Fragment>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-9">
              <SearchArticleForm
                onSubmitHandler={this.onSubmitHandler}
                onChangeHandler={this.onChangeHandler}
                defaultValue={defaultValue}
              />
              <hr />
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button type="button" className={`nav-item btn btn-link rounded-0 nav-link ${searchKey === "all" ? "active" : ""}`}>All</button>
                  <button type="button" className={`nav-item btn btn-link rounded-0 nav-link ${searchKey === "title" ? "active" : ""}`}>Title</button>
                  <button type="button" className={`nav-item btn btn-link rounded-0 nav-link ${searchKey === "tag" ? "active" : ""}`}>Tag</button>
                  <button type="button" className={`nav-item btn btn-link rounded-0 nav-link ${searchKey === "author" ? "active" : ""}`}>Author</button>
                </div>
              </nav>

              <div className="tab-content mt-5" id="nav-tabContent">
                <SearchArticleData
                  searching={searching}
                  searchKey={searchKey}
                  searchTerm={searchTerm}
                  articles={searchedArticles}
                  defaultValue={defaultValue}
                />
              </div>
            </div>
            <div className="col-md-3">
              <RecentArticles articles={sidebarArticles} isLoading={isLoading} />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

SearchArticle.propTypes = {
  fetchSearchArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sidebarArticles: state.articles.articles,
  searchedArticles: state.articles.searchArticles,
  searchError: state.articles.searchArticleError,
});

export default connect(mapStateToProps, { fetchSearchArticle, fetchArticles })(SearchArticle);
