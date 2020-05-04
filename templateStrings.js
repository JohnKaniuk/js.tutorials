// (`) template strings
//let name = 'Jen'
//let age = '15'
//let score = '999'

//let full_name = function(first, last){
    //return `${first} ${last}`
//}

//let get_score = function(name, score){
    //return `Name: ${name} - Score: ${score} `
//}

// challenge area
// a 25% tip on 40$ which would be $10
let getTip = function (total, tipPercent= .25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent

    return `A ${percent}% tip on ${total} would be $${tip}}`
} 
let tip = getTip(40, .25)
console.log(tip)
