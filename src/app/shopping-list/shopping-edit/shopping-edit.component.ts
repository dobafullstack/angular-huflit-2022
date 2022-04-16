import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Ingredient from 'src/app/models/Ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;

  constructor(private service: ShoppingListService) {}

  ngOnInit(): void {}

  onAdd() {
    const { amount, name } = this;

    console.log(this.amount, this.name);

    if (!name || !amount) {
      alert('Please type something');
      return;
    }

    const newIngredient = new Ingredient({
      name,
      amount,
    });

    this.service.addIngredient(newIngredient);

    this.name = '';
    this.amount = 0;
  }
}
