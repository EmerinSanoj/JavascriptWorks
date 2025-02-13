var number=169622
while(number!=0){
    let lastDigit=number%10
    if(lastDigit%2!=0){
        console.log(number);
        break
        
    }
    else{
        number=Math.floor(number/10)
    }
}
