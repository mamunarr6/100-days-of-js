const numbers = [10,20,30,40]
const getSum = ([first,second, ...rest])=>{
    let sum = 0;
    for(const num of rest){
        sum = sum+num;
    }
    return sum;
}
// console.log(getSum(numbers));