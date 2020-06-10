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


//Generate the dom structure for a note 
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p')
       
    if (note.title.lenth > 0){
     noteEl.textContent = note.title
    } else{
        noteEl.textContent = 'Unnamed note'
    }
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



