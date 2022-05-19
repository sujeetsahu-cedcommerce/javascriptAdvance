const emp = [];

function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    renderEmpArrow(emp_ID ,emp_Name,emp_Sal);
}

let renderEmpArrow = (emp_ID,emp_Name,emp_Sal) => {
    const temp =[emp_ID,emp_Name,emp_Sal];
    len=emp.length;
    emp[len]=temp;
    console.log(emp);
    let text ="<table><th>ID</th><tr><th>Name</th><th>15% of Salary</th></tr>";
    for(var i=0;i<emp.length;i++)
    {
        text += "<tr id = '"+ i +"'>";
        for(let j=0;j<=2;j++){
            if(j==2){
                text +="<td>" + (emp[i][j]*15)/100 + "</td>";
            }
            else{
                text +="<td>" + emp[i][j] + "</td>";
            }
        }
       // text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";
        text +="</tr>";
    }
    text +="</table>";
    document.getElementById("display").innerHTML=text;
    return text;
}