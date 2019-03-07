import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import StatActionTypes from "../../../actions/stats/actionTypes";
import * as statActions from "../ReadingStatsAction";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const authorUsername = 'testUser';

describe("reading stats", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create an action fetch stats", () => {
    const stats = [];
    const expectedAction = {
      type: StatActionTypes.FETCH_STATS,
      payload: stats,
    };
    expect(statActions.fetchStats(stats)).toEqual(expectedAction);
  });

  it("should create an action for fetch stats error", () => {
    const error = null;
    const expectedAction = {
      type: StatActionTypes.FETCH_STATS_ERROR,
      payload: error,
    };
    expect(statActions.fetchStatsError(error)).toEqual(expectedAction);
  });

  it("should get reading stats for author's articles", () => {
    const stat = [{
      id: 1,
      article: {},
    }];
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: stat,
      });
    });

    const expectedAction = [
      {
        type: StatActionTypes.FETCH_STATS,
        stat,
      },
    ];
    const store = mockStore({});
    store.dispatch(statActions.getStats(authorUsername)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
