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
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name.toLocaleLowerCase() === searchInput.value.toLocaleLowerCase()) {
            return addParagraph.innerHTML = `O contato para 
            ${contacts[i].name} é: <br> ${contacts[i].phone} 
            ou ${contacts[i].email}`
        }
    }
    return alert("Contato não existe")
}

searchButton.addEventListener("click", showContact)