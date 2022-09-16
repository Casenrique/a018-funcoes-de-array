let array = [1,2,3,4,5,6,7,8]

//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;



// const multiplicaPor3 = (array) => {
//     const triplos = []
//     for(let numero of array){
//         triplos.push(numero * 3)
//     }
//     return triplos
// }

// console.log(multiplicaPor3(array))

const triplos = array.map(function(valor) {
    return valor * 3
})

console.log(triplos)

const triplos2 = array.map(valor => valor * 3)

console.log(triplos2)

//2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

// const divididoPor2 = (array) => {
//     const metades = []
//     for(let numero of array){
//         metades.push(numero/2)
//     }
//     return metades
// }

// console.log(divididoPor2(array))

const metades = array.map(function(value) {
    return value / 2
})

console.log(metades)