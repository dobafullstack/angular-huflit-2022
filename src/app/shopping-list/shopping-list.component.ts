import { Component, OnInit } from '@angular/core';
import Ingredient from '../models/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient({
      name: 'Apples',
      amount: 5,
    }),
    new Ingredient({
      name: 'Tomato',
      amount: 10,
    }),
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
