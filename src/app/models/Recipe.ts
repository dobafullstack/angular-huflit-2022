import Ingredient from './Ingredient';

export default class Recipe {
  name: string;
  description: string;
  imagePath: string;
  public ingredients: Ingredient[];

  constructor(recipe: Recipe) {
    this.name = recipe.name;
    this.description = recipe.description;
    this.imagePath = recipe.imagePath;
    this.ingredients = recipe.ingredients;
  }
}
