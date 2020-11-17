import { shallow } from "enzyme";

import LoginForm from "./LoginForm";
import { findByTestAttr } from "./test/testUtils";

const setup = () => {
  return shallow(<LoginForm />);
};

let wrapper = setup();

test("renders without error", () => {
  const component = findByTestAttr(wrapper, "component-loginForm");
  expect(component.length).toBe(1);
});

test("form renders without error", () => {
  const form = findByTestAttr(wrapper, "form");
  expect(form.length).toBe(1);
});

test("renders login button", () => {
  const loginButton = findByTestAttr(wrapper, "login-button");
  expect(loginButton.length).toBe(1);
});

test("renders icon and 'Logga In' text", () => {
  const loginText = findByTestAttr(wrapper, "login-text");
  expect(loginText.text().length).not.toBe(0);
});

test("renders link to register page", () => {});

test("onclick button form validation", () => {});

test("link to register page working", () => {});
