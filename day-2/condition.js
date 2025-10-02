/**
 * Javascript Condition from ph books
 */
let partyMember = 120;
let beingGift = true
if(partyMember > 100 && beingGift === true){
	// console.log("Lets party all night.")
}else{ console.log("I will party with myself")}

// ternary operator

let sunny = false;
sunny === false? console.log("stay at home"): console.log("go outside");

/** ------------------------------------------------------------------------ */

//From chatgpt problems but I did it by myself then I checked it.>

/**A shop gives discounts:
If purchase > 1000 → 20% discount
If purchase > 500 → 10% discount
Otherwise no discount
Write a program to calculate the final bill. */
let purchase = 1500;
let discount1 = 20;
let discount2 = 10;

if(purchase>1000){
    let discountPrice = (purchase*discount1)/100;
    console.log(purchase-discountPrice)
}else if(purchase>500 && purchase<1000){
    let discountPrice = (purchase*discount2)/100;
    console.log(purchase-discountPrice)
}else{
    console.log("No discount")
}

/** Electricity Bill Calculator
1–100 units → 5 per unit
101–200 units → 8 per unit
More than 200 units → 10 per unit
Take user input for units and calculate the bill. */
let usedUnits = 250;
let theBill = 0;
if(usedUnits <= 100){
     theBill = usedUnits*5;
}else if(usedUnits<=200){
    theBill = (100 * 5) + (usedUnits-100)*8;
    
}else{
    theBill = (100 * 5) + (100 * 8) + (usedUnits-200)*10;
   
}
 console.log(theBill)
