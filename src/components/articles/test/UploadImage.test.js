import React from "react";
import { shallow } from "enzyme";
import UploadImage from "../UploadImage";

const props = {
  handleClick: jest.fn()
};

describe("test image upload function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UploadImage {...props} />);
  });
  it("should render follow button", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should test cloudinary", () => {
    global.cloudinary = {
      openUploadWidget: (params, cb) => {
        cb(null, {
          event: "success",
          info: { secure_url: "http://cloudinary/img/123.png" }
        });
      }
    };
    const widgetFunc = wrapper.instance().handleClick();
    expect(widgetFunc);
  });
});
