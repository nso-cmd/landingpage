import { describe, expect, it } from "vitest";
import { PRICE } from "../config/checkout";

describe("ebook offer", () => {
  it("sells the package for R$ 49,90", () => {
    expect(PRICE.today).toBe("R$ 49,90");
  });

  it("calculates the saving against the package value", () => {
    const reais = (value: string) => Number(value.replace("R$ ", "").replace(",", "."));
    expect(reais(PRICE.savings)).toBeCloseTo(reais(PRICE.full) - reais(PRICE.today), 2);
  });
});