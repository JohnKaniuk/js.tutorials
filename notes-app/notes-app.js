
// DOM - document object model

// const p= document.querySelector('p')
// p.remove()
//query all and remove
//const ps = document.querySelectorAll('p')

//ps.forEach(function (p){
   //p.textContent= '**********'
    //console.log(p.textContent)
    //p.remove()
//})

// add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)
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

   // you have 2 todos left
   // add a p for each todo 
   const newParagraph = document.createElement('p')
   newParagraph.textContent = forEach(todos.name)
   document.querySelector('body').appendChild