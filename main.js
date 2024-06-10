

const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];

countries.forEach(country => console.log(country));


const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];


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




// const sixChartCountries = countries.filter((country)=>{
//     return country.length === 6;

// })
// console.log(sixChartCountries)

//12.

const sixCharCountries = countries.filter((country) => {
    return country.length === 6
})
console.log(sixCharCountries)

//13
const sixCharCountriesOrMore = countries.filter((country)=> {
    return country.length >= 6;
})
console.log(sixCharCountriesOrMore);