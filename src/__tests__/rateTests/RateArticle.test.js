import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RateArticle } from "../../components/articles/RateArticle";
import { AverageRating } from "../../components/articles/AverageRating";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("RateArtcile component", () => {
  const props = {
    articles: {
      articles: {
        article: {
          slug: "This-is-a-slug",
          points: {
            points: 2,
          },
        },
      },
    },
    rateArticle: jest.fn(),
  };
  const component = shallow(<RateArticle {...props} />);

  test("Renders component without failure", () => {
    expect(component).toMatchSnapshot();
  });

  test("Should rate the article", () => {
    const star = component.find("[data-test='component-rate-article']");
    component.instance().onClick(2);
    expect(star.length).toBe(1);
    expect(component.instance().props.rateArticle).toHaveBeenCalled();
  });

  test("component will receive props", () => {
    const store = mockStore({});
    const nextProps = {
      rate: {
        loading: false,
        rated: {
          rating: {
            points: 2,
          },
        },
      },
      errors: {
        errors: {
          error: "Failed to rate",
        },
      },
    };
    component.instance().componentWillReceiveProps(nextProps);
    expect(store.getState()).toEqual({});
  });

  test("component will receive props", () => {
    const store = mockStore({});
    const nextProps = {
      rate: {
        loading: true,
        rated: {
          rating: {
            points: 2,
          },
        },
      },
      errors: {
        errors: {
          error: "Failed to rate",
        },
      },
    };
    component.instance().componentWillReceiveProps(nextProps);
    expect(store.getState()).toEqual({});
  });
});

describe("AverageRating component", () => {
  test("Renders without failure", () => {
    const props = {
      avgRate: { avgRate: 4 },
    };
    const wrapper = shallow(<AverageRating {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
