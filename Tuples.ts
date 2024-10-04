// // Tuples
// // fruits => [name,price,stocks]

// // let orange : (string | boolean | number)[] = ['orange', 400, true ]
// let orange: [string, boolean, number, string, number] = ['orange', true, 2300, "Myanmar", 20]

// console.log(orange);

// // orange[1] = 'two thousand'
// console.log('new ', orange);
// orange.push('you got hacked')
// console.log('again ', orange);


// type alies 
type Fruit = [string, boolean, number, string, number]

let orange: Fruit = ['orange', true, 2300, "Myanmar", 20]
let banana: Fruit = ['banana', true, 300, 'Myanmar', 30]

type Strnum = (string | number)[]
let arrs : Strnum =["thihan",20]