const building = {
    floors: 10,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
};

for (const key in building){
    const value = building[key]
    const address= building.address;
    for(const addkey in address){
        const addvalue = address[addkey];
        // console.log(addkey,addvalue)
    }
    // console.log(key,value)
};

//second method

const keys = Object.keys(building);

for(const key of keys){
    const value =building[key]
    // console.log(key,value)
}


let students = [
    { name: "Rahim", marks: 78 },
    { name: "Karim", marks: 88 },
    { name: "Nabila", marks: 95 },
    { name: "Hasan", marks: 67 }
];
let topStudent = students[0];

for(const student of students){
    if(student.marks>topStudent.marks){
        topStudent= student
    }
}

// console.log("the higest mark is ",topStudent.marks)


let studentss = [
  { name: "Robin", class: "A" },
  { name: "Aisha", class: "B" },
  { name: "Rahim", class: "A" },
  { name: "Karim", class: "C" },
  { name: "Nabila", class: "B" }
];

let grouped = studentss.reduce((group,student)=>{
    let cls = student.class;

    if(!group[cls]){
        group[cls]=[];
        // console.log(group[cls])
    }

    group[cls].push(student);
    return group;
},{})
// console.log(grouped)


const numbers =[1,2,3,4,5,6,7,8,9];

let addition = numbers.reduce((sum,num)=>{
     sum = sum + num;
    return sum;
})

// console.log(addition)
