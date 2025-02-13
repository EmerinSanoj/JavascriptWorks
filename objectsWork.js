//object


// var object={
//     attribute:value
// }

var person={
    name:"emerin",
    age:22,
    gender:"female"
}

console.log(person.name);
console.log(person.age);


var student={
    roll:12,
    name:"emerin",
    course:"python"
}
console.log(student.course);

//adding new attribute

student.qualification="btech"
console.log(student);


//create an object employee with attributes id,name,department,salary

var employee={
    id:426,
    name:"anjana",
    department:"developer",
    salary:30000
}
console.log(employee);
employee.experience=1
console.log(employee);


if("salary" in employee){
    console.log("exist");
    
}
else{
    console.log("not exist");
    
}

if("bonus" in employee){
    employee.bonus=5
}
else{
    employee.bonus=10
}
console.log(employee);

if("bonus" in employee){
    employee.bonus+=10
}
else{
    employee.bonus=20
}
console.log(employee);

