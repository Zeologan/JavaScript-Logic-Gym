try{
    let x = y+18
    console.log("this line will not executed")
}catch(err){
    console.error(err.message);
    console.error(err.name)
}