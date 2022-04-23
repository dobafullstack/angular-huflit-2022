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

  statedEditing = new EventEmitter<number>();
  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onUpdateItem(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onDeleteItem(index: number) {
    this.ingredients = this.ingredients.filter((_, i) => i !== index);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
