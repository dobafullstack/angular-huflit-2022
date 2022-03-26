import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Recipe from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe({
      name: 'Pizza',
      description: 'Italia',
      imagePath:
        'https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg',
    }),
    new Recipe({
      name: 'Hamburger',
      description: 'America',
      imagePath:
        'https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg',
    }),
  ];

  onSelect(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
