export const initialState = {
  notifications: [],
  markRead: "",
  markReadError: "",
  errors: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case "FETCH_NOTIFICATIONS":
    return Object.assign(
      {}, state, { notifications: action.payload },
    );

  case "FETCH_NOTIFICATIONS_ERROR":
    return Object.assign(
      {}, state, { errors: action.payload },
    );

  case "MARK_AS_READ":
    return Object.assign(
      {}, state, { markRead: action.payload },
    );

  case "MARK_AS_READ_ERROR":
    return Object.assign(
      {}, state, { markReadError: action.payload },
    );

  default:
    return state;
  }
};

export default notificationReducer;
