class Car {
  private actualSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 200,
  ) {
  }

  private alterSpeed(delta: number): number {
    const newSpeed = this.actualSpeed + delta;
    const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    if (validSpeed) {
      this.actualSpeed = newSpeed;
    } else {
      this.actualSpeed = delta > 0 ? this.maxSpeed : 0;
    }

    return this.actualSpeed;
  }

  public accelerate(): number {
    return this.alterSpeed(5);
  }

  public breakCar(): number {
    return this.alterSpeed(-5);
  }
}

const car1 = new Car("Ford", "Ka", 185);

console.log(car1);

car1.accelerate();

console.log(car1);
