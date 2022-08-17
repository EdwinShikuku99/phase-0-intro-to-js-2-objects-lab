// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "Pipeline",
}
function updateEmployeeWithKeyAndValue (employee, streetAddress, Pipeline){
    const newEmployee ={
        ...employee
    };
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue( employee,streetAddress, Pipeline){
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey( employee, name){
    const deleteEmployee = {
        ...employee
    };
    delete deleteEmployee.name;
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}