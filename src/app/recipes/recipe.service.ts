import { EventEmitter, Injectable } from '@angular/core';
import Ingredient from '../models/Ingredient';
import Recipe from '../models/Recipe';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe({
      name: 'Pizza',
      description: 'Italia',
      imagePath:
        'https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg',
      ingredients: [
        new Ingredient({ name: 'Meat', amount: 1 }),
        new Ingredient({ name: 'FrenchFries', amount: 20 }),
      ],
    }),
    new Recipe({
      name: 'Hamburger',
      description: 'America',
      imagePath:
        'https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg',
      ingredients: [
        new Ingredient({ name: 'Buns', amount: 2 }),
        new Ingredient({ name: 'Meat', amount: 1 }),
      ],
    }),
  ];

  constructor(private slService: ShoppingListService) {}

  getListRecipe() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
