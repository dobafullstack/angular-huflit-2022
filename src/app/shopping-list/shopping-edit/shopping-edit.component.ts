import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Ingredient from 'src/app/models/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

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

    this.ingredientAdded.emit(newIngredient);

    this.name = '';
    this.amount = 0;
  }
}
