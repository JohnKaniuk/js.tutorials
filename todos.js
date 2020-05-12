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
     comepleted: true
    },{
     name : 'play some games',
     comepleted: false
    }]

    const deleteTodo = function (todos, todoText){
        const index = todos.findIndex(function (todo) {
            return todos.text === todoText
        })

        if (index > -1){
         (completed === true)
        } {
            todos.splice(index, 2)
        }
    }
    
    deleteTodo(todos,'do coding')
    console.log(todos)
    
    

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