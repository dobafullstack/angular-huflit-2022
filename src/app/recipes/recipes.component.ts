import { Component, OnInit } from '@angular/core';
import Recipe from '../models/Recipe';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipe?: Recipe;

  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.service.recipeSelected.subscribe((recipe) => (this.recipe = recipe));
  }
}
