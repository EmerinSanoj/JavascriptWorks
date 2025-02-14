//spread operator

var expense2k24=[1000,1200,3000,2400]

var expense2k25=[1000,2000]

var expenseAll=[...expense2k24,...expense2k25]

// console.log(expenseAll);

hithaFavFood=["biriyani","alfahm","bbq"]
anjanaFavFood=["fried rice","dosa","pulav"]
emerinFavFood=["chai",...hithaFavFood,...anjanaFavFood,"soda"]
// console.log(emerinFavFood);

var student1={course:"django",batch:"july",faculty:"anshya",name:"emerin",age:22}
var student2={...student1,name:"anjana",age:23}
// console.log(student1);

// console.log(student2);

var person={name:"emerin",age:22,department:"developer"}
var location={state:"kerala",district:"kochi"}
var data={...person,...location}
// console.log(data);


var {name}=person
// console.log(name);

var {department}=person
// console.log(department);

function bmi({height,weight}){
    var result=weight/(height/100)**2
    console.log(result);
    

}
var data={height:165,weight:50}
bmi(data)




