const divideMoney =(object)=>object.money/5;
console.log(divideMoney({name:"Karim",money:200}));

const firstLastSum = (array)=> array[0]+array[array.length-1];
console.log(firstLastSum([5,4,8,6]))

const sumOfTwo = (a=10,b=5)=>a+b;
console.log(sumOfTwo(25,52))