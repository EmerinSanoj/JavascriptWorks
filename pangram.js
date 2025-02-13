var text="the quick brown fox jumps over the lazy dog"
var alphabets="abcdefghijklmnopqrstuvwxyz"
var isPangram=true

for(let ch of alphabets){
    if(!text.includes(ch)){
        isPangram=false
        break
    }
}
// console.log(isPangram);

var text1="listen"
var text2="slientg"
var isAngram=true
for(let ch of text2){
    if(!text1.includes(ch)){
        isAngram=false
        break
        
    }
}
console.log(isAngram);

