const contacts = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '555-555-5555'
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '555-555-5556'
    },
    {
        name: 'Jimmy Doe',
        email: 'jimmy.doe@example.com',
        phone: '555-555-5557'
    },
    {
        name: 'Jill Doe',
        email: 'jill.doe@example.com',
        phone: '555-555-5558'
    }
]

const searchButton = document.querySelector("button")
const searchInput = document.querySelector("input")
const addParagraph = document.querySelector("p")

function showContact() {
    for (const contactsNames of contacts) {
        if (contactsNames.name.toLocaleLowerCase() === searchInput.value.toLocaleLowerCase()) {
            return addParagraph.innerHTML = `O contato para 
            ${contactsNames.name} é: <br> ${contactsNames.phone} 
            ou ${contactsNames.email}`
        }
    }
    return alert("Contato não existe")
}

searchButton.addEventListener("click", showContact)