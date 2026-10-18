import { describe, expect, it } from "vitest";
import { CHECKOUT_URL, PRICE } from "../config/checkout";

describe("ebook offer", () => {
  it("points every buy button at the Kiwify checkout", () => {
    expect(CHECKOUT_URL).toBe("https://pay.kiwify.com.br/4SBglvf");
  });

  it("sells the package for R$ 49,90", () => {
    expect(PRICE.today).toBe("R$ 49,90");
  });

  it("calculates the saving against the package value", () => {
    const reais = (value: string) => Number(value.replace("R$ ", "").replace(",", "."));
    expect(reais(PRICE.savings)).toBeCloseTo(reais(PRICE.full) - reais(PRICE.today), 2);
  });
});