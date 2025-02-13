var words=["hello","hai","hello","hai","hai"]

var wordCount={}

for(let w of words){
    if(w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}
console.log(wordCount);


var text="ABCCDAA"
var charCount={}

for(let c of text){
    if(c in charCount){
       console.log(c);
       
        break
    }
    else{
        charCount[c]=1
 
    }
}
//console.log(charCount);

