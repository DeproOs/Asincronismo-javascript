const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Async!!"),2000)
        : reject(new Error("Error!"));
    })
}

const anotherFn = async () => {
    const somenthing = await fnAsync();
    console.log(somenthing);
    console.log("Hello!");
}

console.log("Before");
anotherFn();
console.log("After");