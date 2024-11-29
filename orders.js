let order = [
    "101,Abhi",
    "102,Shreyam",
    "103,Amrit",
    "104,Nikhil",
    "105,Ankit"
]
let order2 = [
    "106,Naveen",
    "107,Atul",
    "108,Saurab"
]
let order3 = [];
for(let i=0; i<order2.length; i++){
    order3.push(order2[i]);
}
//console.log(order3);
for(let i=0; i< order.length; i++){
    order3.push(order[i]);
}
order = order3;
console.log(order)