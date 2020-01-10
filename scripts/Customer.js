const Employee = (customer, customerEmployees) => {
    // debugger
    return `
        <div class="customer">
            <header class="customer__name">
                <h1>${customer.businessName}</h1>
            </header>

        <ol>
        ${
            customerEmployees.map(employee => {

            return `<li>Employees: ${employee.firstName} ${employee.lastName}</li>`

            }).join("")
        }
        </ol>

    </section>
        </div>
    `
}

export default Employee