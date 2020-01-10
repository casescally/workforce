let EmployeeCustomers = []

export const useEmployeeCustomers = () => EmployeeCustomers.slice()

export const getEmployeeCustomers = () => fetch("http://localhost:8088/employeeCustomers")
    .then(res => res.json())
    .then(parsedEmployeeCustomers => EmployeeCustomers = parsedEmployeeCustomers)