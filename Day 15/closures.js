function closures() {
    let count = 0;
    return {
        increment: function () {
            count++
            return count
        },
        decrement: function () {
            if (count > 0) {
                count--
            }
            return count
        }
    }
}
let counter = closures()
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());