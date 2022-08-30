function desafio1(number, string) {
    const array = []
    for(let i = 0; i < number; i++) {
        array.push(string)
    }
    return array
}

// console.log(desafio1(6, "gcb"))

function desafio2(array) { // TA DANDO ERRO
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[array.length-1])
        console.log(newArray)
        array.pop()
    }
    return newArray
}

// console.log(desafio2([1,2,3,4,5,6,7,8]))

function desafio3() {

}

function desafio4(arrays) { // FALTA DEIXAR NUM OBJETO SÓ, spread
    const metodo = arrays.map((array) => {
        return array
    }).map((objeto) => {
        const nome = objeto[0]
        const valor = objeto[1]
        return {
            [`${nome}`]: valor
        }
    })
    return metodo
}

console.log(desafio4([["c",2],["d",4]]))