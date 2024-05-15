type Article = {
  name: string;
  price: number;
  weightG: number;
  quantity: number;
};

export function getShippingCost(articles: Article[]): number {
  return articles.reduce((acc, article) => {
    return acc + article.weightG * article.quantity * 0.01;
  }, 0);
}

export function isOrderExpensive(articles: Article[]): boolean {
  return articles.reduce((acc, article) => {
    return acc + article.price * article.quantity;
  }, 0) > 10000;
}