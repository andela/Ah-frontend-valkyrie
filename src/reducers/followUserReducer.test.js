import followingReducer from "./followUserReducer";
import actionTypes from "../actions/actionTypes";

const initialState = {
  data: {
    following: false
  },
  followers: []
};

describe("test user following reducer", () => {
  it("test empty reducer", () => {
    expect(followingReducer(initialState, {})).toEqual(initialState);
  });
  it("test follow user case", () => {
    let res = followingReducer(initialState, {
      type: actionTypes.FOLLOW_USER,
      payload: {
        username: "",
        bio: "",
        image: "",
        following: true
      }
    });
    expect(res).toEqual({
      data: {
        username: "",
        bio: "",
        image: "",
        following: true
      },
      followers: []
    });
  });
  it("test unfollow user case", () => {
    let res = followingReducer(initialState, {
      type: actionTypes.UNFOLLOW_USER,
      payload: {
        username: "",
        bio: "",
        image: "",
        following: false
      }
    });
    expect(res).toEqual({
      data: {
        username: "",
        bio: "",
        image: "",
        following: false
      },
      followers: []
    });
  });
  it("test get following", () => {
    let res = followingReducer(initialState, {
      type: actionTypes.GET_FOLLOWING,
      payload: [
        {
          username: "",
          bio: "",
          image: "",
          following: true
        }
      ]
    });
    expect(res).toEqual({
      data: [
        {
          username: "",
          bio: "",
          image: "",
          following: true
        }
      ],
      followers: []
    });
  });
  it("test get followers case", () => {
    let follow = {
      data: {
        following: false
      },
      followers: [{ bio: "", following: true, image: "", username: "" }]
    };
    let res = followingReducer(follow, {
      type: actionTypes.GET_FOLLOWERS,
      payload: [
        {
          username: "",
          bio: "",
          image: "",
          following: true
        }
      ]
    });
    expect(res).toEqual({
      data: {
        following: false
      },
      followers: [
        {
          username: "",
          bio: "",
          image: "",
          following: true
        }
      ]
    });
  });
});
