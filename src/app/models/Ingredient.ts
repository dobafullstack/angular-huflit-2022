export default class Ingredient {
  name: string;
  amount: number;

  constructor(ingredient: Ingredient) {
    this.name = ingredient.name;
    this.amount = ingredient.amount;
  }
}
