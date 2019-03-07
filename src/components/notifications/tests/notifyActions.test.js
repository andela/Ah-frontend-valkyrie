import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import { subscribeSuccess, fetchMailListSuccess } from "../notifyActions";

describe("Notify Actions", () => {
  it("should subscribe or unsubscribe to notifications ", () => {
    const notification = {};
    const expectedAction = {
      type: "SUBSCRIBE_SUCCESS",
      payload: notification,
    };
    expect(subscribeSuccess(notification)).toEqual(expectedAction);
  });

  it("should fetch email notifications list", () => {
    const maillist = {};
    const expectedAction = {
      type: "FETCH_MAIL_LIST",
      payload: maillist,
    };
    expect(fetchMailListSuccess(maillist)).toEqual(expectedAction);
  });
});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("Async functions", () => {
  beforeEach(() => {
    moxios.install;
  });
  afterEach(() => {
    moxios.uninstall;
  });

  it("is successful on subscribing for notifications", () => {
    const notifications = {};
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: notifications,
      });
    });
    const expectedAction1 = [{
      type: "SUBSCRIBE_SUCCESS",
      payload: notifications,
    }];

    store.dispatch(subscribeSuccess(expectedAction1));
  });

  it("is successful on fetching a mail list", () => {
    const maillist = {};
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: maillist,
      });
    });
    const expectedAction2 = [{
      type: "FETCH_MAIL_LIST",
      payload: maillist,
    }];

    store.dispatch(fetchMailListSuccess(expectedAction2));
  });
});
