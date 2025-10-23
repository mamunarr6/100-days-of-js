const names = ["Ali","Badol","Chitto","Ditto","Efat"];
names.reverse();
// console.log(names);
const numbers = [10,20,30,40,50];
numbers.reverse();
// console.log(numbers)
const users =[
    {name:"Ali",age:21},
    {name:"Badol",age:22},
    {name:"Chitto",age:20},
    {name:"Efat",age:22},
    {name:"Ditto",age:23}
]
users.reverse();
// console.log((users))

const fruits = ["Apple","Banana","Cherry","Date"];
const slicedFruits = fruits.slice(1,3);
// console.log(slicedFruits);
// console.log(fruits)
const cars =["Tesla","BMW","Toyota","Ford"];
const teslBmw = cars.slice(0,2);
// console.log(teslBmw);
// console.log(cars)

const movieList = ["Inception","Titanic","Joker","Avatar","Intersteller"];
const splicedMovieList = movieList.splice(2,2,"Batman","Superman");
// console.log(splicedMovieList);
// console.log(movieList);
const players = ["Messi","Ronaldo","Neymar","Mbappe"];
const splicedPlayers = players.splice(3,1,"Holland");
// console.log(splicedPlayers);
// console.log(players);