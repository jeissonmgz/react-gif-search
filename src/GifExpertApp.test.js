const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("./GifExpertApp");
import React from "react";

describe("<GifExpertApp />", () => {
  let wrapper = shallow(<GifExpertApp />);
  const categories = ["Soccer", "Messi"];

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
  });

  test("should initialize", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show list of categories", () => {
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
