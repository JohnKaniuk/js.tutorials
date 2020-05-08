//challenge video
// 15/20 -you got a c (75%)
// 90-100 A 80-89B 79-70C 69-60D
const earned = 8 
const out_of = 20
let percent = (earned/out_of) * 100


let letter_grade = function(percent){
    if (percent >= 90){return 'A+'}
    else if (80 >= percent <= 89){return 'A'} 
    else if (70 >= percent <=79) {return 'B'}
    else if (60 >= percent <= 69) {return 'C'}
    else if (percent <= 59) {return 'D'}
}
// let grade = letter_grade(percent )

console.log(`You got a ${letter_grade(percent)} - ${percent}`)

// console.log(letter_grade)
// console.log(letter_grade(80))