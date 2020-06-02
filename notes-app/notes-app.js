// // DOM - document object model

// // const p= document.querySelector('p')
// // p.remove()
// //query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p){
//    p.textContent= '**********'
//     //console.log(p.textContent)
//     //p.remove()
// })

// add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)
const notes = [{
    title: 'my next trip',
    body: 'i would like to go to japan' 
    }, {
    title : 'habits id like to improve',
    body: 'excercise more'
    }, {
    title: 'office modification',
    body: 'get office chair'
    }
]

const filters = {
    searchText: ''
}
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        
    })

document.querySelector('#notes').innerHTML = '<p>TEST</p>'

   filteredNotes.forEach(function(note){
       const noteEl = document.createElement('p')
       noteEl.textContent = note.title
       document.querySelector('#notes').appendChild(noteEl)
   })

}


renderNotes(notes, filters)




document.querySelector('#create-notes').addEventListener('click',function(e){
    console.log('did this work')
    e.target.textContent = "The button was clicked"
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    e.target.elements.firstName.value = ''
})