
//Names used
const names = ['Leandro', 'Leandro', 'Jose', 'Manuel']


//function to remove duplicates
export function remove(obj) {

    let x = (obj) => obj.filter((v, i) => obj.indexOf(v) === i)
    return x(obj)
    
}

export default remove;

remove(names)
console.log()

for (let data of remove(names)) {
    console.log(data)
}