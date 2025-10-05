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