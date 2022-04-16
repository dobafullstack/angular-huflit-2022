import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Recipe from 'src/app/models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.service.getListRecipe();
  }
}
