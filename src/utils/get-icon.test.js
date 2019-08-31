// @flow strict
import getIcon from "./get-icon";
import { ICONS } from "../constants";

test("getIcon", () => {
  expect(getIcon("twitter")).toBe(ICONS.TWITTER);
  expect(getIcon("github")).toBe(ICONS.GITHUB);
  expect(getIcon("email")).toEqual(ICONS.EMAIL);
});
