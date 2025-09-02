function fakeApiCall(succes) {
    return new Promise((resolve, reject) => {
        console.log('Api Call ...');

        setTimeout(() => {
            if (succes) resolve({ id: 1, name: "John Doe" });
            else reject("Network error")
        }, 2000);
    })
}
fakeApiCall(false)
.then((response) => console.log(response))
.catch((err) => console.log(err))

