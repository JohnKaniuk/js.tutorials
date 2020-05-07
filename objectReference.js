let myAccount = {
    name: 'John',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
   account = {}
     account.expenses = account.expenses + amount
    console.log(account)
}
addExpense(myAccount, 2.50)
console.log(myAccount)

//addIncome
//reset account
// get account summary
//account for john has 900$, 1000$ in income, 100$ in expenses
//add income , addExpense, getAccountsummary
//reset account

let myAccount = {
    name: 'John',
    expenses: 100,
    income: 1000,
    total: 900
}
let getAccountSummary = function (account, amount) {
    let balance = account.income - account.expenses
    return `Account for ${myAccount.name} has an income of ${myAccount.income} expenses of ${myAccount.expenses} and a total of ${myAccount.total}`
}
let addIncome = function(account, income){
    myAccount.income = myAccount.income + income
}
let resetAccount = function(myAccount,total){
    myAccount.expenses = 0
    myAccount.income = 0
}
let addExpenses = function(account, expenses) {
    myAccount.expenses = myAccount.expenses + expenses
}

addIncome = (myAccount, 200)
addExpenses = (myAccount, 500)
addExpenses = (myAccount, 160)
let getAccount = getAccountSummary(myAccount)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
