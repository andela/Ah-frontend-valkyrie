import { SOCIAL_SHARE_ERROR, SOCIAL_SHARE_PENDING, SOCIAL_SHARE_SUCCESS } from "../../actions/socialShareActions";
import socialShareReducer from "../socialShareReducer";

describe("Social share reducers", () => {
  it("should return the initial state", () => {
    expect(socialShareReducer(undefined, {})).toEqual(
      {
        data: {},
        error: "",
      },
    );
  });
  it("should handle SOCIAL SHARE PENDING", () => {
    expect(socialShareReducer([], {
      type: SOCIAL_SHARE_PENDING,
      isSocialSharePending: true,
    })).toEqual(
      {
        isSocialSharePending: true,
      },
    );
  });
  it("should handle SOCIAL SHARE SUCCESS", () => {
    expect(socialShareReducer([], {
      type: SOCIAL_SHARE_SUCCESS,
      data: { link: "some link", provider: "twitter" },
    })).toEqual(
      {
        isSocialSharePending: false,
        data: { link: "some link", provider: "twitter" },
      },
    );
  });
  it("should handle SOCIAL SHARE ERROR", () => {
    expect(socialShareReducer([], {
      type: SOCIAL_SHARE_ERROR,
      error: "Some error",
    })).toEqual(
      {
        isSocialSharePending: false,
        error: "Some error",
      },
    );
  });
});
