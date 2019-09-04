// Lets create an application
// ExpenseIncome

let account_1 = {
    id: 1,
    owner: 'Alireza Kazemi',
    expense: 0,
    Income: 0
}

let addExpense = function(account, amount) {
    account.expense = account.expense + amount;
}
let addIncome = function(account, amount) {
    account.Income = account.Income + amount;
}
let getAccountSummary = function(account) {
    console.log(`id: ${account.id} , Owner: ${account.owner} , Expense: ${account.expense} , Income: ${account.Income} , and the remaning money: ${account.Income - account.expense}`)
}


addIncome(account_1, 23000);
addExpense(account_1, 1000);
addExpense(account_1, 5000);
addExpense(account_1, 10000);
addIncome(account_1, 23000);

getAccountSummary(account_1);