import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { findByTestAttr } from "./test/testUtils";

const setup = () => {
  return shallow(<Navbar />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-navbar");
  expect(component.length).toBe(1);
});
