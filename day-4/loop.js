let num = 0;
let sum = 0;

// for of
const week = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
for(const day of week){
    // console.log(day)
}

// while loop
while(num<=10){
    // console.log(numbers)
    sum = sum + num;
    num++;
}
// console.log("The sum of first 10 numbers = ",sum)

// for loop
for(let i = 25;i<=75;i++){
    // console.log(i)
    sum += i;
}
// console.log("The sum of 25 to 75 is = ", sum);

// print the numbers from 1 to 50 which are divided by 3 and 4 and the sum of those numbers;
for(let i=1;i<51;i++){
    if(i%3==0 && i%4==0){
        sum += i;
    }
}
console.log("the sum = ",sum)
