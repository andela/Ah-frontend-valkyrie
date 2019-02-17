import {
  PROFILE_BEGIN,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../../actions/profile";

const initialState = {
  profile: {},
  loading: false,
  error: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
  case PROFILE_BEGIN:
    return {
      ...state,
      loading: true,
      error: null,
    };

  case FETCH_PROFILE_SUCCESS:
    return {
      ...state,
      loading: false,
      profile: action.payload.profile,
    };

  case FETCH_PROFILE_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      profile: {},
    };

  case UPDATE_PROFILE_SUCCESS:
    return {
      ...state,
      loading: false,
      profile: action.payload.user,
    };

  case UPDATE_PROFILE_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      profile: {},
    };

  default:
    return state;
  }
}
