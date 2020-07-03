import { GiftGridItem } from "./GiftGridItem";
import React from "react";
import { shallow } from "enzyme";

describe("Component: GifGridItem", () => {
  const title = "title";
  const url = "mi_imagen.png";
  let wrapper = shallow(<GiftGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GiftGridItem title={title} url={url} />);
  });

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a parrafe with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should have a image with src and alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("should have class card", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("card")).toBe(true);
    expect(div.hasClass("grid_card")).toBe(false);
  });
});
