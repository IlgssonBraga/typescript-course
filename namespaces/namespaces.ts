namespace Geometria {
  export namespace Areas {
    const PI = 3.14;
    export function circ(radius: number): number {
      return PI * Math.pow(radius, 2);
    }

    export function rect(base: number, high: number): number {
      return base * high;
    }
  }
}

console.log(Geometria.Areas.circ(10));
console.log(Geometria.Areas.rect(10, 20));
