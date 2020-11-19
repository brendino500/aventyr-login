import React from "react";
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

test("renders link to register page", () => {
  const registerLink = findByTestAttr(wrapper, "register-link");
  expect(registerLink.length).toBe(1);
});

describe("state controlled input field", () => {
  let mockSetEmail = jest.fn();
  let mockSetPass = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetEmail.mockClear();
    mockSetPass.mockClear();
    React.useState = jest.fn(() => ["", mockSetEmail]);
    React.useState = jest.fn(() => ["", mockSetPass]);
    wrapper = setup({});
  });

  test("state updates with value of email address", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");

    const mockEvent = { target: { value: "klaus@email.com" } };
    emailInput.simulate("change", mockEvent);
    expect(mockSetEmail).toHaveBeenCalledWith("klaus@email.com");
  });

  test("state updates with value of pass", () => {
    const passInput = findByTestAttr(wrapper, "pass-input");

    const mockEvent = { target: { value: "pass" } };
    passInput.simulate("change", mockEvent);
    expect(mockSetPass).toHaveBeenCalledWith("pass");
  });
});
