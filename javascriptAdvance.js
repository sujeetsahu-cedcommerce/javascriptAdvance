class Emp{
    constructor(id,name,salary){
        this.Id = id;
        this.Name = name;
        this.Salary = salary;
    }
}

let emp1 = new Emp(101,"sujeet",35000);
// 
text = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
 text +="<tr><td>"+ emp1.Id +"</td><td>" + emp1.Name + "</td><td>" + emp1.Salary +"</td></tr></table>"
document.getElementById("display").innerHTML=text;