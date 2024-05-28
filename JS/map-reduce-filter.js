// Adicionar 10% de valor de mercado a todas as companhias -> Map
// Filtrar somente companhias fundadas abaixo de 1990 -> Filter
// Somar o valor de mercado das restantes -> Reduce

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadell', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
]
/*
const addPorcentage = companies.map(value => {
    return {
        marketValue: value.marketValue * 1.1,
    }
})

const foundedfilter = addPorcentage.filter(value => value.fundedOn < 1990)

const sum = foundedfilter.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(sum);
*/

const marketValueOldCompanies = companies
    .map(company => {
        company.marketValue *= 1.1
        return company

    })
    .filter(company => company.fundedOn < 1990)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies.toFixed(2));

// Subtrair 10% de valor de mercado a todas as companhias
// Filtrar somente companhias fundadas depois de 1980
// Somar o valor de mercado das restantes

const marketValueNewCompanies = companies
    .map(company => {
        company.marketValue *= 0.9
        return company
    })
    .filter(company => company.fundedOn > 1980)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(marketValueNewCompanies);