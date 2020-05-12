
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
notes[2] = 'This is new note 3'
notes.forEach(function(item, index){
    console.log(item)
    console.log(index)
})
//counting... 1 ,2, 3
for (let count = 2; count>= 0; count--){
    console.log(count)
}

for (let count =notes.length -1; count >= 0; count--){
    console.log(notes[count])
}




console.log(`You have ${todos.length} things to do`)