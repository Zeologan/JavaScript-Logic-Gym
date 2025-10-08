const date = new Date();
// const today = new Date();
// console.log(date)
// console.log(date.getFullYear());
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(today.toLocaleDateString());  
// console.log(today.toLocaleString());  
// console.log(today.toLocaleDateString("en-IN", {
//   weekday: "long",
//   year: "numeric",
//   month: "numeric",
//   day: "numeric"
// }));

// Simple Timer 
const target = new Date("Oct 21, 2025 00:00:00").getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    console.log(`${days}days left for Diwali!`);

    if(diff < 0){
        clearInterval(timer);
        console.log("Happy Diwali");
    }
}, 1000);