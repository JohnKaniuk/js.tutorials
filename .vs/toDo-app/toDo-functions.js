// get saved todos
const getSavedTodos = function(todos){
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null){
    return JSON.parse(todosJSON)
    } else{
        return []
    }
}
//save todos to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
// render todos based on filters
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
       
        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
//Remove a todo from the list
const removeTodo = function(id){
    todos.forEach(function(todo, index){
        if (todo.id === id){
            todos.splice(index, 1)
        }
    })
}
//get dom elements for an individual note
const generateTodoDOM = function (todo){
    const todoEl =document.createElement('div')
    const checkbox = document.createElement('input')
    const todotext =document.createElement('span')
    const removeButton = document.createElement('button')

    //setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click',function(){
        saveTodos(todos)
        removeTodo(todo.id)
        renderTodos(todos ,filters)
    })

    //setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    //setup todo text
    todotext.textContent = todo.text
    todoEl.appendChild(todotext)

    return todoEl
}
//get the dom elements for a list summary
const generateSummaryDOM = function (incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
const newParagraph = document.createElement('p')
newParagraph.textContent = 'God this is going to be hard to remember'
document.querySelector('body').appendChild(newParagraph)

const newerParagraph = document.createElement('p')
newerParagraph.textContent = "How do i relearn all of this"
document.querySelector('body').appendChild(newerParagraph)

const newestButton = createElement('button')
addEventListener('click').appendChild(newestButton)


