const { AddCategory } = require("./AddCategory");
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Component: AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should initialize", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Hola mundo" } });
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe("Hola mundo");
  });

  test("should not post onsubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clear", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "Hola mundo" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Que se le envie una funcion
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
