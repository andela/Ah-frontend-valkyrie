import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import moxios from "moxios";
import * as profileActions from "../index";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const testUserId = 1;
const profile = {
  profile: {
    username: "testUser",
    first_name: "",
    last_name: "",
    bio: "",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
};

const user = {
  user: {
    username: "testUser",
    first_name: "",
    last_name: "",
    bio: "",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
};

describe("Profile Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create an action fetch profile success", () => {
    const expectedAction = {
      type: profileActions.FETCH_PROFILE_SUCCESS,
      payload: { profile },
    };
    expect(profileActions.fetchProfileSuccess(profile)).toEqual(expectedAction);
  });

  it("should create an action fetch profile error", () => {
    const error = {};
    const expectedAction = {
      type: profileActions.FETCH_PROFILE_FAILURE,
      payload: { error },
    };
    expect(profileActions.fetchProfileFailure(error)).toEqual(expectedAction);
  });

  it("should create an action update profile success", () => {
    const expectedAction = {
      type: profileActions.UPDATE_PROFILE_SUCCESS,
      payload: { user },
    };
    expect(profileActions.updateProfileSuccess(user)).toEqual(expectedAction);
  });

  it("should create an action update profile error", () => {
    const error = {};
    const expectedAction = {
      type: profileActions.UPDATE_PROFILE_FAILURE,
      payload: { error },
    };
    expect(profileActions.updateProfileFailure(error)).toEqual(expectedAction);
  });
});

describe("Test Fetch Profile", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("tests profile can be fetched", () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { user },
      });
    });

    const expectedAction = [{
      type: profileActions.FETCH_PROFILE_SUCCESS,
      payload: { user },
    }];

    const store = mockStore({});
    store.dispatch(profileActions.fetchProfile(testUserId)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe("Test update Profile", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("tests profile can be updated", () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { user },
      });
    });


    const expectedAction = [{
      type: profileActions.UPDATE_PROFILE_SUCCESS,
      payload: { user },
    }];

    const store = mockStore({});
    store.dispatch(profileActions.updateProfile(user, testUserId)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
