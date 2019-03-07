import axios from "axios";
import { baseUrl, putPostConfig, getConfig } from "../utils/http";

export const subscribeSuccess = notification => (
  {
    type: "SUBSCRIBE_SUCCESS",
    payload: notification,
  }
);

export const fetchMailListSuccess = maillist => (
  {
    type: "FETCH_MAIL_LIST",
    payload: maillist,
  }
);

export const subscribeUnsubscribe = status => (dispatch) => {
  const notificationData = {
    recieve_email_notifications: status,
  };
  axios(`${baseUrl}mail_list_subscribe`, putPostConfig("PUT", notificationData))
    .then((response) => {
      dispatch(subscribeSuccess(response.data));
    })
    .catch(err => err);
};

export const fetchMailList = () => (dispatch) => {
  axios(`${baseUrl}mail_list`, getConfig("GET"))
    .then((response) => {
      dispatch(fetchMailListSuccess(response.data));
    })
    .catch(err => err);
};
