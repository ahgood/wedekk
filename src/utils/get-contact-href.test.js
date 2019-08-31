// @flow strict
import getContactHref from "./get-contact-href";

test("getContactHref", () => {
  expect(getContactHref("twitter", "#")).toBe("https://www.twitter.com/ahgood");
  expect(getContactHref("github", "#")).toBe("https://github.com/ahgood");
  expect(getContactHref("email", "#")).toBe("mailto:ahgood@gmail.com");
});
