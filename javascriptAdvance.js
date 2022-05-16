+
class Emp{
    constructor(id,name,salary){
        this.Id = id;
        this.Name = name;
        this.Salary = salary;
    }
}

let emp1 = new Emp(101,"sujeet",35000);
let emp2 = new Emp(102,"arvind",25000);
let emp3 = new Emp(103,"akash",20000);

jsn = JSON.stringify(emp1);
displayJason(jsn);
// console.log(jsn);
// 
// text = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
//  text +="<tr><td>"+ emp1.Id +"</td><td>" + emp1.Name + "</td><td>" + emp1.Salary +"</td></tr></table>"
// document.getElementById("display").innerHTML=text;


// Use objects of the above declared class to add employee details in to a JSON array object.

function displayJason(d){
    data = JSON.parse(d);
    txt = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
    txt +="<tr><td>"+ data.Id +"</td><td>" + data.Name + "</td><td>" + data.Salary +"</td></tr></table>"
   document.getElementById("displayJasonObject").innerHTML=txt;
}