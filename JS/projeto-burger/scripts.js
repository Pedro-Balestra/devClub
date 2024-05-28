const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscout = document.querySelector('.discount')
const buttonTotalSum = document.querySelector('.total-sum')
const buttonFilter = document.querySelector('.filter-vegan')

function formatCurrency(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
    <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>`;
        list.innerHTML = myLi
    })
}

function discount() {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: formatCurrency(product.price * 0.9),
    }))
    showAll(newPrice)
}

function totalSum() {
    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li>
           <p>O valor total é de R$ ${formatCurrency(total)}</p>
        </li>`
}

function filterOnlyVegan() {
    const filterVegan = menuOptions.filter(product => product.vegan === true)
    showAll(filterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscout.addEventListener('click', discount)
buttonTotalSum.addEventListener('click', totalSum)
buttonFilter.addEventListener('click', filterOnlyVegan)