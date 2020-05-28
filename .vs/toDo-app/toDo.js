// const ps = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph){
//     if (paragraph.textContent.includes("the")){
//         paragraph.remove()
//     }
// })
const todos = [{
    name: 'walk the dog',
    comepleted: false
   },{
    name :'brush my teeth',
    comepleted: false
   },{
    name : 'go on a walk',
    comepleted: true
   },{ 
    name :'do coding',
    comepleted: true 
   },{
    name : 'play some games',
    comepleted: true
   }]

//    you have 2 todos left
//    add a p for each todo 
//    const newParagraph = document.createElement('p')
//    newParagraph.textContent = forEach(todos.name)
//    document.querySelector('body').appendChild
//    //    const ps = document.querySelector(todos)
//     paragraphs.forEach(function(){})
// const incompleteTodos = todos.filter(function(todo){
//     return !todo.comepleted
// })

// const summary = document.createElement('h2')
// summary.textContent = `you have ${incompleteTodos.length} todos left`
// document.querySelector('body').appendChild(summary)

// todos.forEach(function(todos){
//     const p = document.createElement('p')
//     p.textContent= todos.text 
//     document.querySelector('body').appendChild(p)
// })
document.querySelector('#hold-this').addEventListener('click', function(){
    console.log('wow no chance it worked')
})