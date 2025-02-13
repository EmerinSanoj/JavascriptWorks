var sourceWord="CHICKEN"
var target="HEN"
var wc={}
for(let s of sourceWord){
    if(s in wc){
        wc[s]+=1
    }
    else{
        wc[s]=1
    }
}
var isKWD=true
for(let t of target){
    if(t in wc && wc[t]>0){
        wc[t]-=1

    }
    else{
        isKWD=false
    }
}
console.log(isKWD);
