const todos = [{
     name: 'walk the dog',
     comepleted: false
    },{
     name :'brush my teeth',
     comepleted: false
    },{
     name : 'go on a walk',
     comepleted: false
    },{ 
     name :'do coding',
     comepleted: false
    },{
     name : 'play some games',
     comepleted: true
    }]

// const deleteTodo = function (todos, todoText){
//     const index = todos.findIndex(function (something) {
//         return something.name.toLowerCase() === todoText.toLowerCase()
//     })

//     if (index > -1){
//         todos.splice(index, 1)
//     }
// }

const getThingsToDo = function (todos){
    return todos.filter(function(todo){
  return todo.completed === false
    
    })
}


console.log(getThingsToDo(todos))
// deleteTodo(todos, "do coding")
// console.log(todos)

    
    

//1. convert array to array pf onjects -> text, completed
//2. create function to remove a todo by text vaule
// let todoName = (todos,'Do coding')
// const findTodos = function(todos, todoName){
//     const index = todos.body.find('completed')}
//     {
//         return todos.name === todoName 
//     }
// console.log(todos.name)
// console.log(todos)