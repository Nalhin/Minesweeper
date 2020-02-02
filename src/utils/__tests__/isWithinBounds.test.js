import { isWithinBounds } from "../isWithinBounds";

describe("isWithinBounds", () => {
  it("should return false if lower bound is not met", () => {
    const number = 4;
    const lower = 5;
    const upper = 10;

    expect(isWithinBounds(number, upper, lower)).toBeFalsy();
  });
  it("should return false if upper bound is not met", () => {
    const number = 11;
    const lower = 5;
    const upper = 10;
    expect(isWithinBounds(number, upper, lower)).toBeFalsy();
  });
  it("should return true", () => {
    const number = 5;
    const lower = 5;
    const upper = 10;
    expect(isWithinBounds(number, upper, lower)).toBeTruthy();
  });
});
