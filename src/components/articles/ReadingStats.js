import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStats } from "../../actions/stats/ReadingStatsAction";
import SingleArticleItem from "./SingleArticleItem";

export class ReadingStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      statsResultError: false,
    };
  }

  componentDidMount() {
    this.props.getStats(this.props.authUser.user.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.statsError) {
      this.setState({ statsResultError: true });
    }

    if (nextProps.stats) {
      if (nextProps.stats.results.length > 0) {
        this.setState({
          stats: nextProps.stats.results,
          statsResultError: false,
        });
      } else {
        this.setState({ statsResultError: true });
      }
    }
  }

  render() {
    const { stats, statsResultError } = this.state;
    return (
      <Fragment>
        {(statsResultError) ? (
          <div>
            <h3>None recorded yet.</h3>
          </div>
        ) : (
          <div>
            { (stats).map((stat, index) => (
              <div className="row row-single-article" key={index}>
                <div className="col-sm-8 second">
                  <Fragment>
                    <SingleArticleItem
                      article={stat}
                    />
                  </Fragment>
                </div>
                <div className="col-sm-4 first">
                  <div className="card-body">
                    <h5 className="card-title">
                      Read count
                    </h5>
                    <p className="card-text">{stat.read_count}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

ReadingStats.propTypes = {
  getStats: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stats: state.statReducer.stats,
  statsError: state.statReducer.error,
  authUser: state.loginReducer,
});

export default connect(mapStateToProps, { getStats })(ReadingStats);
