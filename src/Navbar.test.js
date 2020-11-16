import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { findByTestAttr } from "./test/testUtils";

const setup = () => {
  return shallow(<Navbar />);
};

let wrapper = setup();

test("renders without error", () => {
  const component = findByTestAttr(wrapper, "component-navbar");
  expect(component.length).toBe(1);
});

test("renders login button", () => {
  const loginButton = findByTestAttr(wrapper, "login-button");
  expect(loginButton.length).toBe(1);
});

test("renders Äventyr text", () => {
  const aventyrText = findByTestAttr(wrapper, "aventyr-home");
  expect(aventyrText.text().length).not.toBe(0);
});
