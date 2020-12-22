let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
   return 'Name: ' + name  +  ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challenge area \
// total , tipPercent .2
let getTipPercent = function (total, tipPercent = .2){
    return total + tipPercent*total 
}

let getTip = getTipPercent(10)
console.log(getTip)