import { render, screen } from "@testing-library/react";
import App from "./App";
import { findByTestAttr } from "../src/test/testUtils";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
