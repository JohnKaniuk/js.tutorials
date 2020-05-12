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
const findNote = function(notes, noteTitle) {
    
   return notes.find(function (note, index) {
          return notes.title.toLowerCase() === noteTitle.toLowerCase()
      })
     

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//         return notes.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
}

const note = findNote(notes, 'office modification')
console.log(note)












//console.log(notes.pop(1))
// notes.push('Note 4 new')

// console.log(notes.shift())
// notes.unshift('my first note')

//notes.splice(1, 1, "new second item")

// notes[2] = 'This is now new note 3'
//console.log(notes.length)
//console.log(notes)
// notes[2] = 'This is new note 3'
// notes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)
// })