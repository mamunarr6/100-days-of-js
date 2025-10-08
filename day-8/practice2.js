function isLeapYear(year){
    if(year%400===0){
        return `${year} is leap year.`;
    }else if(year%100===0){
        return `${year} is not leap year.`;
    }else if(year%4===0){
        return `${year} is leap year.`;
    }else{
        return `${year} is not leap year.`;
    }
}
// console.log(isLeapYear(2020))
function averageOfOdd(numbers){
    let sum = 0;
    let i = 0;
    for(const number of numbers){
        if(number%2!==0){
            sum = sum + number;
            i++
        }
    }
    if(i===0){
        return 0;
    }
    const average = sum/i;
    return average;
}
// console.log(averageOfOdd([2,4,6,8]))

function averageOfOdd2(numbers){
    let oddNumbers = [];
    for(const number of numbers){
        if(number%2===1){
            oddNumbers.push(number);
        }
    }
    if(oddNumbers.length === 0){
        return 0;
    }

    let sum = 0;
    for(const odd of oddNumbers){
        sum += odd;
    }

    let count = oddNumbers.length;
    const avrg = sum/count
    return avrg ;
}
const average = averageOfOdd2([2,4,6,8]);
// console.log(average)