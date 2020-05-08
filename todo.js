
const todos = ['1. walk the dog', '2.brush my teeth', '3. go on a walk', '4. Do coding', '5.play some games']

//todos.splice[0, 2]
//todos.push('new item')

//todos.shift()

//console.log(todos)

//1. first item
//2. scond item

// todos.forEach(function(item, index){
//     const num = index + 1
//     console.log(`${num } ${item}`)

// })

for (let count = 0; count<= todos.length;count++){
    const num = count + 1
    const todo = todos
    console.log(`${num} ${todo}`)
}





console.log(`You have ${todos.length} things to do`)