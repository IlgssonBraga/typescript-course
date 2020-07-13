class Mathematics {
  static PI = Math.PI;

  static getCircArea(radius: number): number {
    return this.PI * Math.pow(radius, 2);
  }
}

console.log(Mathematics.getCircArea(3));
