/**
 * From ph Hero Books: 
 * 
 * Javascript Math Operator Practice:

Suppose, you have 100 taka. You spent 40 taka. How much money is left, write a program to find it.

You have 10 pencils. Each day you use 2 pencils. How many days can you use them?

Write a program: You have 60 taka. If you spend 15 taka each day, for how many days can you spend? And how much money will be left after that, write a program to find it.

Suppose you have two strings "Hello" and "World". Write a program to join these two strings together to make "HelloWorld" and display it.

If you have 153 kg rice and 261 kg lentils, how many kg of rice and lentils do you have in total? Write a program to find the total.

Suppose you have 500 taka. You spent 75 taka. How much money is left and how much more money can you spend, write a program to find it.
 *  **/

const earning = 100;
const cost = 40
let moneyLeft = earning - cost;
// console.log(moneyLeft)

const havePencil = 10;
const canUse = 2;
const days = havePencil/canUse;
// console.log(days);

let dayCanIUse = 60/15;
let iWillHave = 60%15;
// console.log(dayCanIUse, iWillHave)

const hello = "Hello";
const world = "World";
let helloWorld = hello+world;
// console.log(helloWorld);

const rice = 153;
const lentils = 261;
let total = rice+lentils+" kg";
// console.log(total)

const haveMOney = 500;
const eachCost = 75;
let costOfTimes = haveMOney/eachCost;
let leftMoney = haveMOney%eachCost;
// console.log(costOfTimes,leftMoney)

