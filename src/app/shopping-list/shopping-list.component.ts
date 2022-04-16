import { Component, OnInit } from '@angular/core';
import Ingredient from '../models/Ingredient';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private service: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
  }
}
