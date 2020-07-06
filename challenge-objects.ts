const employee: { supervisors: string[]; point: (hour: number) => void } = {
  supervisors: ["João", "Maria", "José"],
  point: (hour: number) => {
    if (hour <= 8) {
      console.log("Normal point");
    } else {
      console.log("Late point");
    }
  },
};

console.log(employee);

employee.point(7);
