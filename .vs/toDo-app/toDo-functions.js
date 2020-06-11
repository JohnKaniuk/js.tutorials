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
        debugger 
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

//get dom elements for an individual note
const generateTodoDOM = function (todo){
    const noteEl = document.createElement('div')
    const todoEl = document.createElement('span')
    const checkbox = document.createElement('checkbox')
   
    const p = document.createElement('p')
        p.textContent = todo.text
        return p
}
//get the dom elements for a list summary
const generateSummaryDOM = function (incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}



