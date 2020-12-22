
//read existing notes from local storage
const getSavedNotes = function (){
    //check for existing saved data
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null){
    return JSON.parse(notesJSON)
    }else {
        return []
    }

}

// Save notes to local storage
const savedNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove a note from the list
// const removeNote = function (id) {
//     const noteIndex = notes.findindex(function(note){
//         return note.id === id
//     })
//     if (noteIndex > -1){
//         notes.splice(noteIndex, 1)
//     }
// }
const removeNote = function (id){
    notes.forEach(function(note, index){
        if (note.id === id){
            notes.splice(index, 1)
        }
    })
}

//Generate the dom structure for a note 
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button') 
   
    //setup remove note button
   button.textContent = "x"
   noteEl.appendChild(button)
   button.addEventListener('click', function(){
       savedNotes(notes)
       removeNote(note.id)
       renderNotes(notes, filters)
   })
   
   //set up note title text
    if (note.title.lenth > 0){
     textEl.textContent = note.title
    } else{
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)
    return noteEl
}
    

//render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        
    })

    
document.querySelector('#notes').innerHTML = ''

   filteredNotes.forEach(function(note){
    const noteEl = generateNoteDOM(note)
       document.querySelector('#notes').appendChild(noteEl)
   })

}



