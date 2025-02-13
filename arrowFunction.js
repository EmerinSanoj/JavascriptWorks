var cube=(num)=>num**3
console.log(cube(3));

var addNumber=(num1,num2)=>num1+num2
console.log(addNumber(10,20));

var squares=(num)=>num**2
console.log(squares(4));

// var maxTwo=(num1,num2)=>num1>num2?num1:num2
// console.log(maxTwo(5,6));

var maxTwo=(n1,n2)=>{
    if(n1>n2){
        return n1
    }
    else{
        return n2
    }
}
console.log(maxTwo(8,2));



