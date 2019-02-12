import React from "react";
import expect from "expect";
import { create } from "react-test-renderer";
import TextInputField from "../RegisterFields";

describe("TextInputField component", () => {
  test("it matches the snapshot", () => {
    const component = create(<TextInputField />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
