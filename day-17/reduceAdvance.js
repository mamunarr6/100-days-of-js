const products = [
{id: 1, name: 'lenovo', price: 65000},
{id: 2, name: 'dell', price: 45000},
{id: 3, name: 'hp', price: 40000},
{id: 4, name: 'mac', price: 165000},
];


const total = products.reduce((accumolator, current) => accumolator + current.price, 0);
// console.log(total);

const numbers = [10,20,30,40,50];
const highestValue = numbers.reduce((highest,current)=> (highest<current?highest=current : highest),0);
// console.log(highestValue)