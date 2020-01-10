import { getEmployees } from "./EmployeeDataProvider.js"
import { getComputers } from "./ComputerDataProvider.js"
import { getDepartments } from "./DepartmentDataProvider.js"
import { getLocations } from "./LocationDataProvider.js"
import { getEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import { getCustomers } from "./CustomerProvider.js"
import EmployeeList from "./EmployeeList.js"
import CustomerList from "./CustomerList.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getEmployeeCustomers)
    .then(getCustomers)
    .then(EmployeeList)
    .then(CustomerList)