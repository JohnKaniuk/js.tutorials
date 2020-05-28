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
document.querySelector('#create-notes').addEventListener('click',function(e){
    console.log('did this work')
    e.target.textContent = "The button was clicked"
})
document.querySelector('button#remove-all').addEventListener('click', function(){
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

//selection tools

// --single--
// p
// #replace (id = # )
// .item (class = . )

// --multiple--
//p#order
// button.inventory
// h1#title.application
// h1.application#title