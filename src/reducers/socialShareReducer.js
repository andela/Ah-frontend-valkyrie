import * as actions from "../actions/socialShareActions";

const initialState = {
  data: {},
  error: "",
};
const socialShareReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SOCIAL_SHARE_PENDING:
    return Object.assign({}, state, {
      isSocialSharePending: action.isSocialSharePending,
    });
  case actions.SOCIAL_SHARE_SUCCESS:
    return Object.assign({}, state, {
      isSocialSharePending: false,
      data: action.data,
    });
  case actions.SOCIAL_SHARE_ERROR:
    return Object.assign({}, state, {
      isSocialSharePending: false,
      error: action.error,
    });
  default:
    return state;
  }
};
export default socialShareReducer;
