const data = {
    user : {
        profile : { name : "Rohit"}
    }
}

const city = data.user.profile.city ?? "City not available";
console.log(city)