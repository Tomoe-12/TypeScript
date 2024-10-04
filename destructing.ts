// destructing
const data = {
    name: 'thithi',
    age: 20,
}

// const logData = (obj: { name: string, age: number }) :void => {
//     console.log(data.name);
//     console.log(data.age);
// }

const logData = ({ name, age } : { name: string, age: number }): void => {
    console.log(name);
    console.log(age);
}

logData(data)