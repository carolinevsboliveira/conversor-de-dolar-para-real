import {
  CheckIfInputIsValid,
  ReturnFormattedNumber,
  ReturnPositive,
  ReturnValidPercentage,
  ReturnFormattedPercentage
} from "../Functions/Utils/TextValidation"

test("Testando o método CheckIfInputIsValid", () => {
  expect(CheckIfInputIsValid("", "")).toBe(false);
  expect(CheckIfInputIsValid("0", "14.00")).toBe(false);
  expect(CheckIfInputIsValid("0", "0")).toBe(false);
  expect(CheckIfInputIsValid("12.00", "14.00")).toBe(true);
});

test("Testando o método ReturnFormattedNumber", () => {
  expect(ReturnFormattedNumber("0")).toBe("");
  expect(ReturnFormattedNumber("2")).toBe("2.00");
});

test("Testando o método ReturnFormattedPercentage", () => {
  expect(ReturnFormattedPercentage("0")).toBe("0.00");
  expect(ReturnFormattedPercentage("-12")).toBe("");
  expect(ReturnFormattedPercentage("2")).toBe("2.00");
});

test("Testando o método ReturnPositive", () => {
  expect(ReturnPositive("-12")).toBe(12);
  expect(ReturnPositive(-12)).toBe(12);
});

test("Testando o método ReturnValidPercentage", () => {
  expect(ReturnValidPercentage("10000")).toBe("9999");
  expect(ReturnValidPercentage("-10000")).toBe("");
});
