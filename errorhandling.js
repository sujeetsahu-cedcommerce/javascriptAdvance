const emp = [];

function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    alert("details");
    check(emp_ID,emp_Name,emp_Sal);
}
function render()
{
    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>updated Salary</th><th>Action</th></tr>";
    for(var i=0;i<emp.length;i++)
    {
        text += "<tr id = '"+ i +"'>";
        for(let j=0;j<=3;j++){
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
    console.log(index);
    emp.splice(index,1);
   // console.log(emp);
  let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th> Action</th></tr>";
    for(var i=0;i<emp.length;i++)
    {
        text+="<tr>";
        for(let j=0;j<=3;j++){
            text +="<td>" + emp[i][j] + "</td>";
        }
        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";
        text +="</tr>";
    }
    text +="</table>";
    document.getElementById("display").innerHTML=text;
    console.log(emp);
    document.getElementById("display").innerHTML=render();

}

// Apply proper error handling (try catch) and calculate the salary of an employee as salary * 1.10 and display the employee details with updated salary.

function check(emp_ID,emp_Name,emp_Sal){

    try{
        if(emp_Sal <10000 || emp_Sal>40000) throw "salary must greater than 10000 and smaller than 40000";
        var updated_emp_Sal= Math.floor(emp_Sal*1.10);
        var temp =[emp_ID,emp_Name,emp_Sal,updated_emp_Sal];
        len=emp.length;
        //alert(len);
        emp[len]=temp;
       // alert(emp.length);
        render();
     }
     catch(error){
         alert(error);
         document.getElementById("displayErr").innerHtml=error;
     }
}

 