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

const sortNotes = function(notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else{
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)
// const findNote = function(notes, noteTitle) {
    
//    return notes.find(function (note, index) {
//           return notes.title.toLowerCase() === noteTitle.toLowerCase()
//       })
// }

// const findNotes = function (notes, query){
//     return notes.filter(function(note, index){
//         const isTitleMatch = note.title.includes(query)
//         const isBodyMatch = note.body.includes(query)
//          return isTitleMatch || isBodyMatch
//      })
// }


// const filteredNotes = notes.filter(function(note, index){
//    const isTitleMatch = note.title.includes('office')
//    const isBodyMatch = note.body.includes('office')
//     return isTitleMatch || isBodyMatch
// })
// console.log(findNotes(notes, 'habits'))
//const note = findNote(notes, 'office modification')
//console.log(note)

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//         return notes.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
//}











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