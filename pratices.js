// let obj = {
//     firstname:"Abhinandan",
//     // lastname:"Yadav",
//     age: 22,
//     place:"Noida",
//     isGraduate:true,
// };

// for(let key in obj){ 
//     if(typeof obj[key] == "string")
//     console.log(obj[key]) 
// }

// let price = {
//     bread : 2,
//     milk : 4,
//     cheeses : 7,
// };
// for(let obj in price){ 
//     price[obj] = price[obj] - 0.1*price[obj];
//     console.log(price);

// } 

// function getfre(str){
//     let freq ={};
//     for(let key in str){
//         freq[key] = (freq[key] || 0) + 1;
//     }
//     return freq;

// }
// let string = "abbcc"
// let ans = getfre(string);
// console.log(ans);

// function getfrequency(str){ 
//     let obj = {};
//     for(let i=0; i<str.length; i++){
//         let char = str[i];
//         if(obj[char] === undefined){
//             obj[char] = 1;
//         }
//         else{ 
//             obj[char]++;
//         }
//     }
    
//     console.log(obj);
// }
// let str = "aabbbcccc";
// let ans = getfrequency(str);
// for(let i=0; i<str.length; i++){  
//     console.log(`${ans}`)

        
// }

// console.log(ans);


// let obj = {
//     name :"Abhinandan",
//     age : "20",
//     getDetail : function(){
//         console.log(this); 
//     },

// };
// console.log(obj);
// obj.getDetail()

// let obj = {
//     a : 2,
//     b : 3,
//     area1 : function(){
//         console.log(2*(this.a+this.b))
//     }
// };
// obj.area1();

// let obj = { 
//     accountHoldername : "Abhi",
//     balance : 1000,
//     bankAccount : function(){
//         deposite : 
//     }
 
// };

let bankaccountS = { 
    accountName : "Abhinandan",
    amount : 1000,
    deposite : function(amount){ 
        console.log(`Deposite Amount will be ${this.amount + amount}`);
    },
    withdraw : function(amount){
        console.log(`Withdraw Amount will be ${this.amount - amount}`);
    },
};
bankaccountS.deposite(2000);
console.log(bankaccountS.amount)
bankaccountS.withdraw(500);