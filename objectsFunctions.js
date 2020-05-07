let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history', 
    author: 'howard zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }


}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

//challenge area
//create function - take in fahrentheit- retunr objects in celsius and kelvin

//let celcius= (f-32) * 5/9
//let kelvin = c +273.15
//let fahrentheit= c/5 *9 + 32

let cel=24
let kel= 297.15
let fah= 75.2

let getkelvin = function (weather){
    (cel + 273.15)
    return {
       kelvin:`${cel + 273.15}`,
       celsius: `${fah-32 * 5/9}`,
       fahrentheit: `${cel/5 *9 +32}` 
    }

}



let getK= getkelvin(kel)
console.log(getK)
