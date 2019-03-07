import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { subscribeUnsubscribe, fetchMailList } from "./notifyActions";


const mapDispatchToProps = dispatch => ({
  subscribeUnsubscribe: status => dispatch(subscribeUnsubscribe(status)),
  fetchMailList: () => dispatch(fetchMailList()),
});

const mapStateToProps = state => ({
  notification: state.notifyReducer.notification,
  mailList: state.notifyReducer.mailList,
  authUser: state.loginReducer,
});

export class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      isUserSubscribed: false,
    };
  }

  componentDidMount() {
    this.props.fetchMailList();
  }

  componentWillReceiveProps(nextProps) {
    const { authUser } = this.props;
    if (nextProps.mailList.results.length > 0) {
      nextProps.mailList.results.map((obj) => {
        if (obj.user.username === authUser.user.username && obj.recieve_email_notifications === this.state.isUserSubscribed) {
          this.setState({ isUserSubscribed: !this.state.toggle, toggle: !this.state.toggle });
        }
      });
    }
  }

  handleOnChange = () => {
    this.setState({ toggle: !this.state.toggle });
    const { toggle } = this.state;
    this.props.subscribeUnsubscribe(toggle);
    
  }

  render() {
    const { toggle } = this.state;
    return (
      <Fragment>
        <div className="notify">
          <label className="switch">
            {
              toggle ? (
                <input name="toggle" type="checkbox" defaultChecked="checked" onClick={this.handleOnChange} id="myCheck" />
              ) : (
                <input name="toggle" type="checkbox" onClick={this.handleOnChange} id="myCheck" />
              )
            }
            <span className="slider round" />
          </label>
          <span id="toggle-btn">{`${toggle ? "Unsubscribe to Notifications" : "Subscribe to Notifications"}`}</span>
        </div>
      </Fragment>
    );
  }
}
Subscribe.propType = {
  mailList: PropType.func.isRequired,
  subscribeUnsubscribe: PropType.func.isRequired,
  fetchMailList: PropType.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
