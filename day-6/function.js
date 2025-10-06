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