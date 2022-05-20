import { EventEmitter, Injectable } from '@angular/core';
import Laptop from 'src/app/models/Laptop';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private laptops: Laptop[] = [
    new Laptop({
      id: 'LT001',
      name: 'Dell 2020',
      price: 3000,
      description: 'Super strong laptop',
    }),
    new Laptop({
      id: 'LT002',
      name: 'HP 2021',
      price: 3000,
      description: 'Super strong laptop',
    }),
    new Laptop({
      id: 'LT003',
      name: 'ASUS 2020',
      price: 3000,
      description: 'Super strong laptop',
    }),
  ];

  event = new EventEmitter<Laptop[]>();

  public getLaptops() {
    this.event.emit(this.laptops);
  }

  public getLaptop(id: string) {
    return this.laptops.find(laptop => laptop.id === id);
  }

  public onAddLaptop(laptop: Laptop){
    this.laptops.push(laptop);

    this.event.emit(this.laptops);
  }

  public onEditLaptop(id: string, laptop: Laptop) {
    const index = this.laptops.findIndex(item => item.id === id);

    const tempLaptops = [...this.laptops];

    tempLaptops[index] = laptop;

    this.event.emit(tempLaptops);
  } 

  public onDeleteLaptop(id: string){
    this.laptops = this.laptops.filter(item => item.id !== id);

    this.event.emit(this.laptops);
  }
}
