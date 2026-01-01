const readline = require("readline");

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to get input as promise
const ask = (question) => new Promise(resolve => rl.question(question, resolve));

async function main() {
    //  Amount
    const amountInput = await ask("Enter the amount: ");
    const amount = parseFloat(amountInput);
    if (isNaN(amount)) {
        console.log("Invalid amount!");
        rl.close();
        return;
    }

    // Source currency
    const from = (await ask("Enter source currency (USD, INR, EUR): ")).toUpperCase();

    // Target currency
    const to = (await ask("Enter target currency (USD, INR, EUR): ")).toUpperCase();

    // Fetch API
    try {
        const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
        const data = await (await fetch(url)).json();
        console.log(`${amount} ${from} = ${data.rates[to]?.toFixed(2) || "Invalid currency"} ${to}`);
    } catch (err) {
        console.log("Error fetching data:", err.message);
    }

    rl.close();
}

// run the app
main();
