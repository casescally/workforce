const Employee = (employee, computer, department, location, customers) => {
    return `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <div>
                Employee Age: ${employee.age}
            </div>
            <br>
            <section class="employee__computer">
                Currently using a ${computer.year} ${computer.model}
            </section>
            <br>
            <section class="employee__department">
                Works in ${department.departmentName}
            </section>
            <br>
            <section class="employee__location">
            Works at the ${location.locationName}
        </section>
        <br>
        <section class="employee__customers">
        Has worked for the following customers: 
        <ol>
        ${
            customers.map(customer => {

            return `<li>${customer.businessName}</li> 
            <br>
                    <div class="rate">Rate: ${customer.rate}<div>
            <br>
                    <div class="rate">Contract length: ${customer.contractLength}<div>
            `
            }).join("")
        }
        </ol>
    </section>
        </div>
    `
}

export default Employee