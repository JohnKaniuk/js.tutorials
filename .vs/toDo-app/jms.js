const notes =[{
    title: 'My next trip',
    body: 'i will go to poland'
}, {
    title: 'Habits to work on',
    body: 'i need to excersise more'
}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]


const findNotes = function(notes, searchText){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    
}

console.log(findNotes(notes, 'office'))

const getThingstoDo = function (todos){
    return todo.filter(function(todo, index){
        return todo.completed === false
    })
}