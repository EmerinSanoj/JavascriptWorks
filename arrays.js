var colors=["red","blue","green",14,true,false,"red"]
// colors.push("yellow")
// colors.pop()
// colors.unshift("purple")
// colors.shift()
// console.log(colors[0]);

// console.log(colors);
// console.log(colors.length);
// console.log(colors.includes("red"));

// console.log(colors.indexOf("white")); returns -1

// console.log(colors.slice(1,3));


// rotate array k times


// var arr=[10,20,30,40]
// var k=2
// for(let i=1;i<=k;i++){
//     poppedItem=arr.pop()
//     arr.unshift(poppedItem)
// 
// console.log(arr);


// var arr=[10,20,10,30,40,40]
// var newArr=[]
// for(let num of arr){
//     if(!newArr.includes(num)){
//         newArr.push(num)
//     }
// }
// console.log(newArr);
// console.log(newArr.length);


// var text="helloiiii"
// var result=""
// var textLength=text.length-1
// for(let i=textLength;i>=0;i--){
//     result+=text[i]
// }
// console.log(result);


//missing least +ve integer

var arr=[1,2,3,5]
 
for(let left=0;left<arr.length-2;left++){
    let right=left+1
    let result=arr[right]-arr[left]
    if(result!=1){
        console.log(arr[left]+1,"is missing");
        break
        }
}









