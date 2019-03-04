import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./actionTypes";
import {
  followUser,
  unFollowUser,
  getFollowing,
  getFollowers
} from "./FollowUserAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let token = window.localStorage.getItem("token");
const base_url = `${process.env.HOST}`;
let username = "test_user";

describe("test following actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("mock following user action", () => {
    let postData = {};
    fetchMock.postOnce(base_url + `/users/${username}/profile/follow`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const expectedActions = [
      {
        type: actionTypes.FOLLOW_USER,
        payload: undefined
      }
    ];
    const store = mockStore({ data: {} });

    return store.dispatch(followUser(username)).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });
  it("mock unfollowing user action", () => {
    let data = {};
    fetchMock.deleteOnce(base_url + `/users/${username}/profile/follow`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const expectedActions = [
      {
        type: actionTypes.UNFOLLOW_USER,
        payload: undefined
      }
    ];
    const store = mockStore({});

    return store.dispatch(unFollowUser(username)).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });
  it("mock getting following users action", () => {
    fetchMock.getOnce(base_url + `/users/me/profile/followings`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json"
      },
      body: { data: [] }
    });
    const store = mockStore({ data: [] });

    return store.dispatch(getFollowing()).then(() => {
      expect([]).toEqual([]);
    });
  });
  it("mock getting followers action", () => {
    fetchMock.getOnce(base_url + `/users/me/profile/followers`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json"
      },
      body: { data: [] }
    });
    const store = mockStore({ data: [] });

    return store.dispatch(getFollowers()).then(() => {
      expect([]).toEqual([]);
    });
  });
});
