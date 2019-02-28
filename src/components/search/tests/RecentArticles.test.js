import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { RecentArticles } from "../RecentArticles";

describe("Test create article form component", () => {
  const props = {
    isLoading: false,
    articles: [
      {
        id: 1,
      },
    ],
  };

  const wrapper = shallow(<RecentArticles {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
