import expect from "expect";
import statReducer from "../statReducer";
import StatActionTypes from "../../../actions/stats/actionTypes";

describe("stat Reducer", () => {
  const initialState = {
    stats: [],
    error: null,
  };

  it("should return initial state", () => {
    expect(
      statReducer(undefined, []),
    ).toEqual(initialState.stats);
  });

  it("should handle FETCH_STATS", () => {
    const action = {
      type: StatActionTypes.FETCH_STATS,
    };
    expect(statReducer({}, action)).toEqual({});
  });

  it("should handle FETCH_STATS_ERROR", () => {
    const action = {
      type: StatActionTypes.FETCH_STATS_ERROR,
    };
    expect(statReducer({}, action)).toEqual({});
  });
});
