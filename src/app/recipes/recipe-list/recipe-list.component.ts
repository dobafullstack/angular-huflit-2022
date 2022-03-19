import { Component, OnInit } from '@angular/core';
import Recipe from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe({
      name: 'Pizza',
      description: 'Italia',
      imagePath:
        'https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg',
    }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
