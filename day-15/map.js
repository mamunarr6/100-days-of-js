const array = [1,2,3,4,5];

const getOneByOne = (numbers)=>{
    numbers.forEach(e => {
        console.log(e);
    });
}
// getOneByOne(array)

const friends = ["Tom","Harry","Sam","Jack","Henry"];

friends.map(friend=>{
   const firstLetter = friend[0]
   if(firstLetter=== "H"){
    console.log(friend)
   }
})