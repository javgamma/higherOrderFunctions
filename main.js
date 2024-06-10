// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];

countries.forEach(country => console.log(country));


const names = ["Joseph", "Mathias", "Elias", "Brook"];

names.forEach(name => console.log(name));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


numbers.forEach(number => console.log(number));

// MAP:



const capitalLetters = countries.map((country) => country.toUpperCase());
 console.log(capitalLetters);


 const longArray = countries.map((country)=> country.length);
 console.log(longArray);

 const squareNumbers = numbers.map((numberToSquare) => numberToSquare **2);
 console.log(squareNumbers);

 const namesToUppercase = names.map((nameCapital) => nameCapital.toUpperCase());
 console.log(namesToUppercase);

 //Utilice map para asignar el array de productos a sus correspondientes precios.

 