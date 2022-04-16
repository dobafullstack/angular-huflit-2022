import { Component, Input, OnInit } from '@angular/core';
import Recipe from 'src/app/models/Recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Input('index') index: number;

  constructor(private service: RecipeService) {}

  ngOnInit(): void {}
}
