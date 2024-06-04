// function calculateTax(income: number, taxYear: number): number {
//     // let x;
//     if (income < 50_000) return income * 1;
//     return income * 2;

// }

// ------------------------------------------------------------

// function calculateTax(income: number, taxYear: number): number {
//   // let x;
//   if (taxYear < 2022) return income * 1;
//   return income * 2;
// }

// console.log(calculateTax(10_000, 2022));

// ------------------------------------------------------------

function calculateTax(income: number, taxYear = 2022): number {
  // let x;
  if (taxYear < 2022) return income * 1;
  return income * 2;
}

console.log(calculateTax(10_000));
