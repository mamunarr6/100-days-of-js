function getSquare(number){
    if(number){
        return number * number;
    }else{
        return 1;
    }
}
// console.log(getSquare(5))
function getNameSalary(name,salary){
    if(!name){
        return "Anonymus:" + salary +"BDT";
    }else if(!salary){
        return name + " " + 0 +"BDT";
    }else{
        return name + ": " + salary +"BDT";
    }
}
// console.log(getNameSalary("Badal",))