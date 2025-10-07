/**
**Practice: From ph book**
 */

function inchToFeet(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction)

    const remainingFeet = inch%12;
    return feetNumber +" ft "+remainingFeet+" inch";
}
// console.log(inchToFeet(86));

/** 1. Two yards make one fathom. So, write a function that will take yards as input and return how many fathoms that equals. For example, how many fathoms are in 13 miles? */
function mileToGoz(mile){
    const goz= mile*1760;

    return goz + " goz";
}
// console.log(mileToGoz(13))

/**2. Shurot is dieting. He’s thinking about calorie control. 1 kilowatt-hour of energy equals 860 kilocalories. So, write a function that can convert from kilowatts to kilocalories or vice versa. */
function kilowattToKilocalori(kilowatt){
    const kilocalories = kilowatt * 860;
    return kilocalories;
}
// console.log(kilowattToKilocalori(8))

/**3. You already know how to convert hours. But how many minutes or seconds are in one hour? I won’t tell you that — you have to think and then write a function that can convert between them. */
function hourToMinutes(hour){
    const minutes = hour * 60;

    return minutes + " min";
}
// console.log(hourToMinutes(3.5));

function incomeToTax(income){
    let taxRate = 0;
    if(income<=50000){
        taxRate = 10;
    }else if(income<=100000){
        taxRate = 20;
    }else if(income<=200000){
        taxRate = 30;
    }else{
       taxRate = 40;
    }
    const taxAmount = (income*taxRate)/100;
    return taxAmount;
}
// console.log((incomeToTax(240000)))
function deliveryCost(kg){
    let cost = 0;
    if(kg<=10){
        cost = 100;
    }else if(kg<=20){
        cost = 300;
    }else if(kg<=50){
        cost =1000;
    }else{
        cost = kg*100;
    }
    return cost;
}
// console.log(deliveryCost(60))