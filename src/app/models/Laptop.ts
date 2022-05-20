export default class Laptop {
  id: string;
  name: string;
  price: number;
  description: string;

  constructor(laptop: Laptop) {
    this.name = laptop.name;
    this.price = laptop.price;
    this.id = laptop.id;
    this.description = laptop.description;
  }
}
