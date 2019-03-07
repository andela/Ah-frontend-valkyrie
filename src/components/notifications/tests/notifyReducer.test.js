import notifyReducer from "../notifyReducer";

const notify = {};
const mails = {};

const initialState = {
  notification: {},
  mailList: {},
};

const subscribeSuccess = notification => (
  {
    type: "SUBSCRIBE_SUCCESS",
    payload: notification,
  }
);

const MailListSuccess = maillist => (
  {
    type: "FETCH_MAIL_LIST",
    payload: maillist,
  }
);


describe("Notify Reducers", () => {
  it("should subscribe or unsubscribe to notifications", () => {
    expect(notifyReducer(initialState, subscribeSuccess(notify))).toEqual({
      ...initialState,
      notification: notify,
    });
  });

  it("should fetch maillist collection", () => {
    expect(notifyReducer(initialState, MailListSuccess(mails))).toEqual({
      ...initialState,
      mailList: mails,
    });
  });
});
