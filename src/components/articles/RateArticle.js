import React, { Component, Fragment } from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { rateArticle } from "../../actions/rating/ratingActions";
import isEmpty from "../../validations/isEmpty";

export class RateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      slug: "",
      points: 0,
      error: "",
    };
  }

  componentDidMount() {
    this.setState({
      slug: this.props.articles.articles.article.slug,
      points: this.props.articles.articles.article.points.points,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { rate, errors } = nextProps;
    if (!isEmpty(rate.rated)) {
      this.setState({
        points: rate.rated.rating.points,
      });
    }
    if (!isEmpty(errors.errors)) {
      this.setState({
        error: errors.errors.error,
      });
    }
    this.setState({ loading: false });
  }

  onClick = (value) => {
    this.setState({ loading: true });
    this.props.rateArticle(this.state.slug, value);
  };

  render() {
    const { points, loading } = this.state;
    return (
      <Fragment>
        <Rating
          initialRating={0}
          emptySymbol={<i className="far fa-star rate-star" />}
          fullSymbol={<i className="fas fa-star rate-star" />}
          placeholderSymbol={<i className="fas fa-star rate-star" />}
          placeholderRating={points}
          onClick={this.onClick}
          data-test="component-rate-article"
        />
        {!loading ? "" : <i className="fas fa-circle-notch fa-spin text-info" />}
      </Fragment>
    );
  }
}

RateArticle.propTypes = {
  points: PropTypes.instanceOf(Object),
  rateArticle: PropTypes.func.isRequired,
};

RateArticle.defaultProps = {
  points: {},
};

const mapStateToProps = state => ({
  rate: state.rated,
  errors: state.errors,
  articles: state.articles,
});

export default connect(
  mapStateToProps,
  { rateArticle },
)(RateArticle);
