
function inchToFeet(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction)

    const remainingFeet = inch%12;
    return feetNumber +" ft "+remainingFeet+" inch";
}
// console.log(inchToFeet(86));
function mileToGoz(mile){
    const goz= mile*1760;

    return goz + " goz";
}
// console.log(mileToGoz(13))