import { EventEmitter, Injectable } from '@angular/core';
import Ingredient from '../models/Ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient({
      name: 'Apples',
      amount: 5,
    }),
    new Ingredient({
      name: 'Tomato',
      amount: 10,
    }),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
