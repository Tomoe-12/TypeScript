// string
let fruit: string = 'apple'
// fruit = 20    error

// number
let age: number = 20;
// age = 'sttile' error

// boolean
let isLogin: boolean = true
// isLogin =20  error

// undefined
let username: undefined = undefined


let email: null = null

// string array
let fruits: string[] = ['apples', 'orange', 'banana']

// number array
let ages: number[] = [12, 22, 30]

// boolean array 
let random: boolean[] = [true, false, true, true, false]


// objects
let person: { name: string; age: number; isPass: boolean } = {
    name: 'thithi',
    age: 20,
    isPass: true,
}

// function

// void
const greet = (): void => {
    console.log('welcome to arrow function');
}

// never
const logErr = (message: string): never => {
    throw new Error(message)
}
logErr('sth went error')
// logErr(99) error 

function calc(a: number, b: number): number {
    return a + b
}
calc(10, 20)
// calc('10',20) error

let calcTwo = function (a: number, b: number): number {
    return a + b
}
console.log(calcTwo(12,22));
