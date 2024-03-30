#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar 
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        let amountToWithdraw = amountAns.amount;
        if (amountToWithdraw > myBalance) { //change
            console.log(`Insufficient balance. Your balance is: ${myBalance}`);
        }
        else {
            myBalance -= amountToWithdraw; //cnhamge
            console.log(`You withdrew ${amountToWithdraw}. Your current balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "select an option for fast cash withdrawal",
                type: "list",
                choices: [1000, 5000, 8000, 10000, 12000],
            }
        ]);
        let selectedAmount = fastCashAnswer.amount;
        if (selectedAmount <= myBalance) { //change
            myBalance -= selectedAmount; //change
            console.log(`You withdrew ${selectedAmount} . Your current balance is: ${myBalance}`);
        }
        else {
            console.log(`Insuuficient Amount. Your Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
