const { GifGrid } = require("./GifGrid");
import React from "react";
import { shallow } from "enzyme";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("<GifGrid />", () => {
  const category = "Soccer";
  const gifs = [{ id: "1", url: "url.png", title: "Somethong" }];
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  let wrapper = shallow(<GifGrid category={category} />);

  beforeEach(() => {
    wrapper = shallow(<GifGrid category={category} />);
  });

  test("should ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(true);
  });

  test("should show items when load images using useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GiftGridItem").length).toBe(gifs.length);
  });
});
