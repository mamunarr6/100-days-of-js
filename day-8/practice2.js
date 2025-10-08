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
    const average = sum/i;
    return average;
}
console.log(averageOfOdd([5,8,9,11,3,4,5,12,]))