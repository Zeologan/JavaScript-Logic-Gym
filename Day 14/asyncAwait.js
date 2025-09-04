// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))


async function callApi() {
    try {
        const response = await (fetch('https://jsonplaceholder.typicode.com/users'))
        const data = await response.json();
        console.log(data)
    }catch(err){
        console.error(`404 ${error}`)
    }
}
callApi()
