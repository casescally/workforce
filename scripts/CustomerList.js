import { useEmployees } from "./EmployeeDataProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import Customer from "./Customer.js"

const contentTarget = document.querySelector(".customers")

export const CustomerList = () => {

    const employees = useEmployees()

    const customers = useCustomers()

    const customerRelationships = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {

                    // Find all the customer relationships
                    const relationships = customerRelationships.filter(ec => ec.customerId === customer.id)

                    // Find the related employee for each relationship
                    const assignedEmployees = relationships.map(rel => {
                    //find customers by comparing the customers id to the id in the join table
                    const foundEmployees = employees.find(employee => employee.id === rel.employeeId)

                    return foundEmployees
                    })

            //get HTML representation of employee with computer model
            const html = Customer(customer, assignedEmployees)

            return html
        }).join("")
    }

    render()
}

export default CustomerList