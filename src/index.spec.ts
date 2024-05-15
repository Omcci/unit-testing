import { FreeShippingCost, getShippingCost } from ".";

describe("article", () => {
  const articles = [
    {
      name: "article1",
      price: 1000,
      weightG: 1000,
      quantity: 1,
    },
    {
      name: "article2",
      price: 3000,
      weightG: 2000,
      quantity: 2,
    },
  ];

  const expensiveArticles = [
    {
      name: "article1",
      price: 20000,
      weightG: 5000,
      quantity: 1,
    },
    {
      name: "article2",
      price: 30000,
      weightG: 4000,
      quantity: 2,
    },
  ];
  it("frais de port : 10 euros par kilogramme du poids total", () => {
    const resultat = getShippingCost(articles);
    const resultat2 = getShippingCost(expensiveArticles);
    expect(resultat).toBe((1 * 1000 + 2 * 2000) * 0.01);
    expect(resultat2).toBe((1 * 5000 + 2 * 4000) * 0.01);
  });

  it("si le prix de la commande dépasse 100euros, les frais de port sont gratuits", () => {
    const freeShipping = FreeShippingCost(expensiveArticles);
    const notFreeShipping = FreeShippingCost(articles);
    expect(freeShipping).toBe(true);
    expect(notFreeShipping).toBe(false);
  });
});