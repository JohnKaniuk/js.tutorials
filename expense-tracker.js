let amountA = 2
let amountB

const account = {
    name: "John",
    expenses: [
        {description: 'Coffee',
         amount: 2
        },{
         description: 'Rent',
         amount: 950
        }
    ],
     income: [{
         description: 'Etransfer',
         amount: 50
     }] ,  
     
    
     addExpense: function(description, amount){
     this.account.expenses.push({
         description: description,
         amount: amount
     })},
    
       getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(){
        totalExpenses = totalExpenses + expenses.amount
            totalIncome = totalIncome + income.amount
                totalAll = income.amount + expenses.amount
        })
        return `${this.name} has a balance of ${totalAll}, ${total.expenses} in expenses and ${total.income} in income!`
    }, 

    
        addIncome: function(description, amount){
            this.income.push({
                description: description,
                amount: amount
            })
        
        }
    }

    




//expense -> description, amount
//addExpense -> description for expense, amount
//getAccount summary -> total up all expenses -> John has 1250 ion expenses
//1. add income array to account 
//2. addIncome -> decription , amount 
//4. andrew mead has a balance of 10$, 100 in income, 90 ion expenses

console.log(account.addExpense('Rent', 950))
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())