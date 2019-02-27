import React from "react";
import expect from "expect";
import utils from "../paginationUtils";

describe("Pagination Utils", () => {
  it("tests currentPage functionality", () => {
    jest.spyOn(utils, "currentPage").mockReturnValue({ classList: { contains: jest.fn() } });
  });
});
