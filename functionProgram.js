function add(num1,num2){
    return num1+num2
}
// console.log(add(10,20));


function cube(num){
    return num**3
}

// console.log(cube(3));


//create a function with 2 para num1,num2 return max number

function max(num1,num2){
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}
// console.log(max(4,5))

function min(num1,num2){
    return num1<num2?num1:num2
}
// console.log(min(1,5));

//create function lastdigitmax



function lastDigitMax(num1,num2){
    return num1%10>num2%10?num1:num2
}
// console.log(lastDigitMax(127,256));


//create a function factorial
function factorial(num){
    let fact=1
    for(let i=1;i<=num;i++){

        fact=fact*i
        
    }
    return fact
    
}
// console.log(factorial(3))

