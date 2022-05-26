//arrow function assignment
const emp = [];
function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    const temp =[emp_ID,emp_Name,emp_Sal];
    len=emp.length;
    emp[len]=temp;
    renderEmpArrow(emp);
}

var renderEmpArrow = (emp) => {
     console.log("hello");
    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>15% of Salary</th><th>Action</th></tr>";

    for(var i=0;i<emp.length;i++)
    {
        text += "<tr id = '"+ i +"'>";

        for(let j=0;j<=2;j++){
            text +="<td>" + emp[i][j] + "</td>";
            if(j==2){
                text +="<td>" + (emp[i][j]*15)/100 + "</td>";
            }
        }

        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";
        text +="</tr>";
    }
    text +="</table>";
    document.getElementById("display").innerHTML=text;
    return text;
}

function Delete_Emp(obj){
    console.log(obj);
    var deltd =obj.closest('td');
    var deltd_par = deltd.parentElement;
    var index = deltd_par.id;
    console.log(index);
    emp.splice(index,1);
    console.log(emp);
    if(emp.lengt==0){
        document.getElementById("display").innerHTML='';
    }
    else{
    document.getElementById("display").innerHTML=renderEmpArrow(emp);
    }
}
