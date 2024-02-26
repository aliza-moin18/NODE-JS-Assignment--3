// 3. Name Cases: Store a person's name in a variables, and then print that person's name in lowercase, uppercase, and titlecase.

let firstName: string = "Aliza Moin";

console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
