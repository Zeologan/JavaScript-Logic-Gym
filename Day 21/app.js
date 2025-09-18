import Book from './book.js';
const b1 = new Book('Python in 100Days', 'Robert Willim', 2010);
const b2 = new Book('Advance C++', 'Mark Josh', 2008);
const books = [b1, b2];
const b3 = new Book('Software World', 'Tonny Zam', 2021);

// b1.delayedSummary()
// b1.logThis()

let bookshell = [];
document.getElementById('action').addEventListener('click', (event) => {
    if (event.target.id === "add") {
        bookshell = [...books, b3];
    } else if (event.target.id === "show") {
        console.log(bookshell);
    } else if (event.target.id === "clear") {
        bookshell.length = 0;
    }
})

