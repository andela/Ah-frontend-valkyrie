export const initialState = {
  notification: {},
  mailList: {},
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
  case "SUBSCRIBE_SUCCESS":
    return Object.assign(
      {}, state, { notification: action.payload },
    );
  case "FETCH_MAIL_LIST":
    return Object.assign(
      {}, state, { mailList: action.payload },
    );

  default:
    return state;
  }
};

export default notifyReducer;

