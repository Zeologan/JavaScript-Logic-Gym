class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} by ${this.author} in this ${year}`)
    }

    logThis() {
        console.log(this)
    }

    delayedSummary() {
        setTimeout(function () {
            console.log('Regular :',this.title)
        }, 1000)

        setTimeout(() => {
            console.log('Arrow :',this.title)
        }, 2000)

    }
}

export default Book;