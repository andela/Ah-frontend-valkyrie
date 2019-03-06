import * as api from "../components/utils/http";

const notificationURL = "notifications/";

export const fetchNotifications = () => (dispatch) => {
  api.getSingleResource(notificationURL)
    .then((response) => {
      dispatch(
        {
          type: "FETCH_NOTIFICATIONS",
          payload: response.data,
        },
      );
    })
    .catch((error) => {
      dispatch(
        {
          type: "FETCH_NOTIFICATIONS_ERROR",
          payload: error.response,
        },
      );
    });
};

export const markNotificationAsRead = () => (dispatch) => {
  api.getSingleResource(`${notificationURL}mark-as-read`)
    .then((response) => {
      dispatch(
        {
          type: "MARK_AS_READ",
          payload: response.data,
        },
      );
    })
    .catch((error) => {
      dispatch(
        {
          type: "MARK_AS_READ_ERROR",
          payload: error.response,
        },
      );
    });
};
