// interface

interface Item extends Taxcalc {
    name: string,
    price: number,
    instock: boolean
}

interface Taxcalc {
    calc(): number
}

let item1 = {
    name: 'orange',
    price: 2000,
    instock: true
}

let item2 = {
    name: 'apple',
    price: 1999,
    instock: false,
    calc(): number {
        return this.price + 200
    }
}

const logItem = (item: Item): void => {
    console.log(`item name is ${item.name} and price is ${item.price} , instock status ${item.instock} , total price is ${item.calc()} `);
}

// logItem(item1)
logItem(item2)
// const itemTaxcalc = (item: Taxcalc): void => {
//     console.log(item.calc());
// }

// itemTaxcalc(item2)