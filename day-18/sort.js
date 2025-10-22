const friend = ["Munna","Rakib","Abdul","Babul","Chitra"];
// console.log(friend.sort());
const ages = [50,12,25,8,15];
const sortedAge = ages.sort((a,b)=>a-b);
// console.log(sortedAge);

const friends = [
    {name:"Babul",age:22},
    {name:"Chitra",age:20},
    {name:"Abdul",age:21},
    {name:"Diba",age:21}
]
const sortedFriendsByAge=friends.sort((a,b)=>a.age-b.age);
console.log(sortedFriendsByAge)