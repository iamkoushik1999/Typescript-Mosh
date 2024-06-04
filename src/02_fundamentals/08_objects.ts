// let employee = { id: 1 };

// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "Mosh" };

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
