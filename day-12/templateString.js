const animals = ["Cat","Dog","Elephant"];
const result = `My favourite animals are ${animals.join()}`;
// console.log(result);

const person = {firstName:"Amit",lastName:"Kumar"};
const personName = `Full Name : ${person.firstName} ${person.lastName}`;
// console.log(personName)

const student = {name:"Hridoy Hasan",age:20,results:[75,85,95]};
function resultAverage(results){
    let sum=0;
    for(const mark of results){
        sum = sum + mark;
    }
    return average= sum/results.length;
}
const averageMarks = resultAverage(student.results);
const resultOfStudent = `${student.name} got average ${averageMarks} marks`;
// console.log(resultOfStudent)