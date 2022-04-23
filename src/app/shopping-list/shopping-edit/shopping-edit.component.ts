import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import Ingredient from 'src/app/models/Ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  isEdit = false;
  editedItem: Ingredient;
  editedItemIndex: number;

  constructor(private service: ShoppingListService) {}

  ngOnInit(): void {
    this.service.statedEditing.subscribe((index) => {
      this.editedItemIndex = index;
      this.isEdit = true;

      const ingredient = this.service.getIngredient(index);

      this.slForm.setValue({
        name: ingredient.name,
        amount: ingredient.amount,
      });
    });
  }

  onSubmit(){
    if (this.isEdit){
      this.onUpdateItem()
    }else{
      this.onAddItem();
    }
  }

  onUpdateItem(){
    const { name, amount } = this.slForm.value;

    const newIngredient = new Ingredient({
      name,
      amount,
    });

    this.service.onUpdateItem(this.editedItemIndex, newIngredient);

    this.onReset()
  }

  onAddItem() {
    const { name, amount } = this.slForm.value;

    const newIngredient = new Ingredient({
      name,
      amount,
    });

    this.service.addIngredient(newIngredient);

    this.onReset()
  }

  onDeleteItem(){
    this.service.onDeleteItem(this.editedItemIndex);
    this.onReset();
  }

  onReset() {
    this.slForm.resetForm();
    this.isEdit = false;
  }
}
