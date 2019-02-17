import profileReducer from "..";
import * as profileActions from "../../../actions/profile";

describe("profile reducer", () => {
  const initialState = {
    profile: {},
    loading: false,
    error: null,
  };

  const profile = {
    profile: {
      username: "testUser",
      first_name: "",
      last_name: "",
      bio: "",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  };

  it("should return the initial state", () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle PROFILE_BEGIN", () => {
    const action = {
      type: profileActions.PROFILE_BEGIN,
    };
    expect(profileReducer({}, action)).toEqual({
      loading: true,
      error: null,
    });
  });

  it("should handle FETCH_PROFILE_SUCCESS", () => {
    const action = {
      type: profileActions.FETCH_PROFILE_SUCCESS,
      payload: { profile },
    };
    const expectedState = {
      profile: {
        profile: {
          username: "testUser",
          first_name: "",
          last_name: "",
          bio: "",
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
      },
      loading: false,
    };

    expect(profileReducer({}, action)).toEqual(expectedState);
  });

  it("should handle FETCH_PROFILE_FAILURE", () => {
    const error = {};

    const action = {
      type: profileActions.FETCH_PROFILE_FAILURE,
      payload: { error },
    };

    expect(profileReducer({}, action)).toEqual({
      loading: false,
      error,
      profile: {},
    });
  });

  it("should handle UPDATE_PROFILE_FAILURE", () => {
    const error = {};

    const action = {
      type: profileActions.UPDATE_PROFILE_FAILURE,
      payload: { error },
    };

    expect(profileReducer({}, action)).toEqual({
      loading: false,
      error,
      profile: {},
    });
  });
});
