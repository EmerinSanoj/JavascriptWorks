var arr=[10,20,30,40,33,21,6]

//map

// var square=arr.map((num)=>num**2)
// console.log(square);

// var cube=arr.map((num)=>num**3)
// console.log(cube);

// var addFive=arr.map((num)=>num+5)
// console.log(addFive);


//filter

// var even=arr.filter((num)=>num%2==0)
// console.log(even);

// var odd=arr.filter((num)=>num%2!=0)
// console.log(odd);

// var numGtTwenty=arr.filter((num)=>num>20)
// console.log(numGtTwenty);


//reduce


// var total=arr.reduce((num1,num2)=>num1+num2)
// console.log(total);

// var product=arr.reduce((num1,num2)=>num1*num2)
// console.log(product);


// var maxNumber=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(maxNumber);


//sort

// function compare(n1,n2){
//     return n1<n2?-1:1
// }
// arr.sort(compare)
// console.log(arr);

// arr.sort((n1,n2)=>n1<n2?-1:1)
// console.log(arr);

// arr.sort((o1,o2)=>o2-o1)
// console.log(arr);


var names=["ram","gopal","ramgopal","jhon","jhonsmith"]
// var upper=names.map((name)=>name.toUpperCase())
// console.log(upper);

// var smName=names.reduce((name1,name2)=>name1.length<name2.length?name1:name2)
// console.log(smName);

// var lgName=names.reduce((name1,name2)=>name1.length>name2.length?name1:name2)
// console.log(lgName);

// var gtFive=names.filter((name)=>name.length>5)
// console.log(gtFive);


// names.sort()
// console.log(names.reverse());

var numbers=[10,100,20,200,30,300,40,400]
var left=1
var arrayLength=numbers.length-1
var right=arrayLength%2==0?arrayLength-1:arrayLength

while(left<right){
    let temp=numbers[left]
    numbers[left]=numbers[right]
    numbers[right]=temp
    left+=2
    right-=2
}
console.log(numbers);













