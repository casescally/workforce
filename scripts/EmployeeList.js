import { useEmployees } from "./EmployeeDataProvider.js"
import { useComputers } from "./ComputerDataProvider.js"
import { useDepartments } from "./DepartmentDataProvider.js"
import { useLocations } from "./LocationDataProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import Employee from "./Employee.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {

    const employees = useEmployees()

    const computers = useComputers()

    const departments = useDepartments()

    const locations = useLocations()

    const customers = useCustomers()

    const customerRelationships = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {

            //find employee's computer model
            const computerModel = computers.find(model => model.id === employee.computerId)

            //find the employee's department
            const employeeDepartment = departments.find(department => department.id === employee.departmentId)

            //find the employee's location
            const employeeLocation = locations.find(location => location.id === employee.locationId)

                    // Find all the customer relationships
                    const relationships = customerRelationships.filter(ec => ec.employeeId === employee.id)

                    // Find the related customer for each relationship
                    const assignedCustomers = relationships.map(rel => {
                    //find customers by comparing the customers id to the id in the join table
                    const foundCustomers = customers.find(customer => customer.id === rel.id)
                    //this will take the rate from the customer relationship join table and append it to each object in the assignedCustomers array
                        foundCustomers.rate = rel.rate
                    //this will take the contract length from the customer relationship join table and append it to each object in the assignedCustomers array
                        foundCustomers.contractLength = rel.contractLength

                        return foundCustomers
                    })

            //get HTML representation of employee with computer model
            const html = Employee(employee, computerModel, employeeDepartment, employeeLocation, assignedCustomers)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList