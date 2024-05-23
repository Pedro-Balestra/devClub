const cart = [20, 244, 99, 2, 20, 33, 250]

function calculateCart() {
    let total = 0
    let valueNoDiscount = 0
    cart.forEach(value => {
        if (value > 30) {
            total += calculateDiscount(value)
        } else {
            total += value
        }
        valueNoDiscount += value
    });
    console.log(`O valor total da compra foi de R$${total}, o desconto dado foi de R$${(valueNoDiscount - total).toFixed(2)} do valor total R$${valueNoDiscount}`)
}

function calculateDiscount(value) {
    let discount = 0
    discount = value - (value * 0.1)
    return discount
}

calculateCart()