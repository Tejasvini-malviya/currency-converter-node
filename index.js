const readline = require("readline");
const fetch = require("node-fetch");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdin,
})
;
rl.question("Enter the amount:",function(amountInput){
    const amount = parseFloat(amountInput);
    if(isNaN(amount)){
    console.log("Invalid amount!");
     rl.close();
     return;
    }
})

rl.question("Enter source currencey (USD,INR,EUR): ",function(from){
from = from.toUpperCase();
})

rl.question("Enter target currency(USD, INR,EUR):",async function(to){
    to= to.toUpperCase();
})