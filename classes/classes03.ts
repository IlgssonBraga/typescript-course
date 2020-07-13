class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0,
  ) {}

  public resume(): string {
    return `${this.name} costs R$ ${this.price} (${this.discount * 100}% off)`;
  }
}

const tv = new Product("TV 50'", 1999, 0.05);

console.log(tv.resume());
