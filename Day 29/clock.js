(() => {
    const timer = setInterval(() => {
        const date = new Date();
        console.log(date.toLocaleTimeString("en-IN"))
    }, 1000);

    setTimeout(() => {
        clearInterval(timer)
    }, 15000);
})();