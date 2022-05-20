import { Component, OnInit } from '@angular/core';
import Laptop from 'src/app/models/Laptop';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(private service: LaptopService) {}

  ngOnInit(): void {
    this.service.event.subscribe((value: Laptop[]) => (this.laptops = value));

    this.service.getLaptops();
  }
}
