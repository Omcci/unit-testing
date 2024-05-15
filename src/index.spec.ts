import { getShippingCost, isOrderExpensive, freeShippingCost } from ".";

describe("article", () => {
  const cheapOrder = [
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

  const expensiveOrder = [
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
    const resultat = getShippingCost(cheapOrder);
    const resultat2 = getShippingCost(expensiveOrder);
    console.log("resultat", resultat, "resultat2", resultat2);
    expect(resultat).toBe((1 * 1000 + 2 * 2000) * 0.01);
    expect(resultat2).toBe((1 * 5000 + 2 * 4000) * 0.01);
  });

  describe("when order is expensive", () => {
    it("si le prix de la commande dépasse 100euros, les frais de port sont gratuits", () => {
      // const order1 = isOrderExpensive(expensiveOrder);
      // const order2 = isOrderExpensive(cheapOrder);
      // console.log("order1",order1,"order2", order2);
      // expect(order1).toBe(true);
      // expect(order2).toBe(false);

      if (getShippingCost(expensiveOrder) > 100) {
        expect(isOrderExpensive(expensiveOrder)).toBe(true);
        expect(freeShippingCost(expensiveOrder)).toBe(0);
      }
    });
    it("si le prix de la commande ne dépasse pas 100euros, les frais de port sont payants", () => {
      if (getShippingCost(cheapOrder) < 100) {
        expect(isOrderExpensive(cheapOrder)).toBe(false);
        expect(freeShippingCost(cheapOrder)).toBe(getShippingCost(cheapOrder));
      }
    });
  });
});
