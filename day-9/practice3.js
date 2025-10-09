function oddToNewArray(array){
    let newArray =[];
    for(const arr of array){
        if(arr%2===1){
            newArray.push(arr*2);
        }
    }
    return newArray
}
const array = oddToNewArray([3,2,5,6,8]);
// console.log(array)
function removeDuplicate(duplicates){
    let unique = [];
    for(const item of duplicates){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}
const students = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
console.log(removeDuplicate(numbers))
