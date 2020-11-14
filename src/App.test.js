import { render, screen } from "@testing-library/react";
import App from "./App";
import { mount } from "enzyme";

const setup = () => {
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAtt(wrapper, "component-app");
  expect(component.length).toBe(1);
});
