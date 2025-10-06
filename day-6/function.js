function votar(a){
    if(a>17){
        console.log("Eligible for Voting");
    }else{
        console.log("Not Eligible");
    }
}
// votar(18);

function evenSizedString(str){
    const size = str.length;
    if(size%2===0){
        return true;
    }else{
        return false;
    }
}
const isEven = evenSizedString("Hello");
// console.log(isEven);

function giveMeLetter(name){
    return name[0];
}
const myFirstLetter=giveMeLetter("Mamun");
// console.log(myFirstLetter)

// get the sum from an array;
function sumOfNums(array){
    let sum = 0;
    for(const arr of array){
        if(arr%2==0){
            sum = sum + arr;
        }
    }
    return sum;
}
const result = sumOfNums([8,3,9,24,32,64]);
// console.log(result)

// get the small number from an array;
function smallNumber(numbers){
    let smallNum = numbers[0];
    for(const number of numbers){
        if(smallNum>number){
            smallNum = number;
        }
    }
    return smallNum;
}
// console.log(smallNumber([20,25,18,32]))