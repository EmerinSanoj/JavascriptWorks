function handleAddButton(){
    let num1=document.getElementById("box1").value
    let num2=document.getElementById("box2").value
    let result=Number(num1)+Number(num2)
    alert(result)
}

function handleSubButton(){
    let num1=document.getElementById("box1").value
    let num2=document.getElementById("box2").value
    let result=Number(num1)-Number(num2)
   
    document.getElementById("root").innerHTML=result
}

function handleProductButton(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)*Number(num2)
    document.querySelector("#root").innerHTML=`${num1}*${num2}=${result}`

}