 var emp= [];

 function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    if(emp_Sal<=0){
        debugfunction();
    }
    else{
    check(emp_ID,emp_Name,emp_Sal);
    }
}

function render()
{
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
    return text;
}

function Delete_Emp(obj){
    var deltd =obj.closest('td');
    var deltd_par = deltd.parentElement;
    var index = deltd_par.id;
    console.log(index);
    emp.splice(index,1);
    console.log(emp);
    document.getElementById("display").innerHTML=render();
    // document.getElementById("display").innerHTML=renderEmpArrow;
}


/*Write a class to declare all the the details of the employee as mentioned in the above HTML page. Create an object of the class and display it.*/ 



// class Emp{
//     constructor(id,name,salary){
//         this.Id = id;
//         this.Name = name;
//         this.Salary = salary;
//     }
// }

// let emp1 = new Emp(101,"sujeet",35000);
// let emp2 = new Emp(102,"arvind",25000);
// let emp3 = new Emp(103,"akash",20000);

// jsn = JSON.stringify(emp1);
// displayJason(jsn); 
// console.log(jsn);

//  text = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
//   text +="<tr><td>"+ emp1.Id +"</td><td>" + emp1.Name + "</td><td>" + emp1.Salary +"</td></tr></table>"
//   document.getElementById("displayEmp").innerHTML=text;


/* Use objects of the above declared class to add employee details in to a JSON array object. */


// function displayJason(d){
//     data = JSON.parse(d);
//     txt = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
//     txt +="<tr><td>"+ data.Id +"</td><td>" + data.Name + "</td><td>" + data.Salary +"</td></tr></table>"
//    document.getElementById("displayJasonObject").innerHTML=txt;
// }


// Use 'this' keyword to display the employee details (stored in JSON array) on the HTML page.


// let e1 = new Emp(1001,'john',20000);
// let e2 = new Emp(1002,'tailor',30000);
// let e3 = new Emp(1003,'malinga',40000);


// Apply proper error handling (try catch) and calculate the salary of an employee as salary * 1.10 and display the employee details with updated salary.


function check(emp_ID,emp_Name,emp_Sal){
    try{
        if(emp_Sal <10000 || emp_Sal>40000) throw "salary must greater than 10000 and smaller than 40000";
        emp_Sal=emp_Sal*1.10;
        const temp =[emp_ID,emp_Name,emp_Sal];
        len=emp.length;
        emp[len]=temp;
        render();
     }
     catch(error){
        console.warn(error);
        document.getElementById("displayErr").innerHtml=error;
     } 
}



/* Create a separate JS file with an employee detail and import it to your main HTML/JS code to add and display this employee details in the HTML page. */


// import {id,name,salary} from "./import_export.js";
//         let text = id+" "+" "+name+" "+" "+salary;
//         console.log(text);

//         document.getElementById("displayImport").innerHTML=text; 


/*Write a debug function and execute it whenever salary becomes less than or equals to zero.*/

function debugfunction(){
    
    console.warn("salary never be zero");
    debugger;
}
