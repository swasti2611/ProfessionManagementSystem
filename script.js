

let button=document.getElementById("submit")
let Form=document.getElementById("form");
let messageSucsees=document.getElementById("messageSucsees");
let messageError=document.getElementById("messageError");

let  employees=[];

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";
   
    employees.forEach((employee, index) => {
        const listItem = document.createElement("li");

       
        listItem.textContent = ` ${employee.id}     Name: ${employee.name}      Profession: ${employee.profession}        Age: ${employee.age}`;
        listItem.style.whiteSpace = "pre"; 
        listItem.className="list"
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteEmployee(index);
            console.log(employee)
        });
        deleteButton.className="deletebtn"

      
        employeeList.appendChild(listItem)
    listItem.appendChild(deleteButton)

    });
}
function deleteEmployee(index) {
    employees.splice(index, 1);
         displayEmployees(); // If you want to update the displayed list immediately
}
  

button.addEventListener('click',(e)=>{
    e.preventDefault()
    let empName=document.getElementById("name")
    let empProfession=document.getElementById("profession")
    let empAge=document.getElementById("age")
    
    if (empName.value && empProfession.value && empAge.value) {
        const newEmployee = {
            id: employees.length + 1,
            name: empName.value,
            profession: empProfession.value,
            age: parseInt(empAge.value)
        };

        employees.push(newEmployee);
        displayEmployees();
         console.log(employees)

         messageSucsees.innerHTML="Success:Employee Added!";
         messageError.style.display="none";
        
    }else{
        messageError.innerHTML="Error : please make sure All the field are filled before adding in an emplyee!"
        messageSucsees.style.display="none";
    }
})
console.log(employees)