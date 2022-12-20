function sum(num1, num2){
    return num1 + num2;
}

function rest(num1, num2){
    return num1 - num2 ;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}
function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log("función suma llamada con callback: " + calc(3, 2, sum));
console.log("función resta llamada con callback: " + calc(3, 2, rest));
console.log("función multiplicación llamada con callback: " + calc(3, 2, mult));
console.log("función divición llamada con callback: " + calc(3, 2, div));

setTimeout( function (){
    console.log("hola, JavaScript");
},2000);

function gretting(name){
    console.log(`Hola, ${name}`);
}

setTimeout(gretting, 4000, "Oscar");
