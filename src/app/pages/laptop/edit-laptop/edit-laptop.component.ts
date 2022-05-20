import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import Laptop from 'src/app/models/Laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-edit-laptop',
  templateUrl: './edit-laptop.component.html',
  styleUrls: ['./edit-laptop.component.scss'],
})
export class EditLaptopComponent implements OnInit {
  id!: string;
  laptop?: Laptop;
  laptopForm!: FormGroup;
  editMode?: boolean;

  constructor(private route: ActivatedRoute, private service: LaptopService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.laptop = this.service.getLaptop(this.id);
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    let laptopId = '';
    let laptopName = '';
    let laptopDescription = '';
    let laptopPrice = 0;

    if (this.editMode) {
      const laptop = this.service.getLaptop(this.id);
      laptopId = this.laptop!.id;
      laptopName = this.laptop!.name;
      laptopDescription = this.laptop!.description;
      laptopPrice = this.laptop!.price;
    }

    this.laptopForm = new FormGroup({
      id: new FormControl(laptopId, Validators.required),
      name: new FormControl(laptopName, Validators.required),
      description: new FormControl(laptopDescription, Validators.required),
      price: new FormControl(laptopPrice, Validators.required),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.service.onEditLaptop(this.id, this.laptopForm!.value);
    } else {
      this.service.onAddLaptop(this.laptopForm!.value);
      this.laptopForm.reset();
    }
  }
}
