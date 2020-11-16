import { findByAltText } from "@testing-library/react";
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

test("form renders without error", () => {});

test("renders login button", () => {
  const loginButton = findByTestAttr(wrapper, "login-button");
  expect(loginButton.length).toBe(1);
});

test("renders icon and 'Logga In' text", () => {
  const loginText = findByTestAttr(wrapper, "login-text");
  expect(loginText.text().length).not.toBe(0);
});

test("renders link to regiseter page", () => {});

test("onclick button form validation", () => {});

test("link to register page working", () => {});
