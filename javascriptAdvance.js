const emp = [];

function empDetails(){

    // let text = "ID :<input id ='empID' type='text'><br>Name :<input id ='empName' type='text'><br>Basic Sal :<input id ='empSalary' type='text'><br><button id='addEmp'>Add</button>"

    let emp_ID = document.getElementById("empID").value;

    let emp_Name = document.getElementById("empName").value;

    let emp_Sal = document.getElementById("empSalary").value;

    const temp =[emp_ID,emp_Name,emp_Sal];

    len=emp.length;

    emp[len]=temp;

    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>";

    for(var i=0;i<emp.length;i++)

    {

 

        text += "<tr id = '"+ i +"'>";

        for(let j=0;j<=2;j++){

            text +="<td>" + emp[i][j] + "</td>";

        }

        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";

        text +="</tr>";

    }

    text +="</table>";

    document.getElementById("display").innerHTML=text;

    console.log(emp);

    return text;

}

function Delete_Emp(obj){

    var deltd =obj.closest('td');

    var deltd_par = deltd.parentElement;

    var index = deltd_par.id;

    // console.log(deltd_par);

    console.log(index);

    emp.splice(index,1);

    console.log(emp);

    // document.getElementById("display").innerHTML=empDetails();

    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>";

    for(var i=0;i<emp.length;i++)

    {

        for(let j=0;j<=2;j++){

            text +="<td>" + emp[i][j] + "</td>";

        }

        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";

        text +="</tr>";

    }

    text +="</table>";

    document.getElementById("display").innerHTML=text;

    console.log(emp);

}



























/*class Emp{
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
displayJason(jsn); */
// console.log(jsn);
// 
// text = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
//  text +="<tr><td>"+ emp1.Id +"</td><td>" + emp1.Name + "</td><td>" + emp1.Salary +"</td></tr></table>"
// document.getElementById("display").innerHTML=text;


// Use objects of the above declared class to add employee details in to a JSON array object.

/*function displayJason(d){
    data = JSON.parse(d);
    txt = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
    txt +="<tr><td>"+ data.Id +"</td><td>" + data.Name + "</td><td>" + data.Salary +"</td></tr></table>"
   document.getElementById("displayJasonObject").innerHTML=txt;
}*/