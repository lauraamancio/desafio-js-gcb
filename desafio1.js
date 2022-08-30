function desafio1(number, string) {
  const array = []
  for (let i = 0; i < number; i++) {
    array.push(string)
  }
  return array
}

// console.log(desafio1(6, "gcb"))

function desafio2(array) {
  const newArray = []
  for (let i = 1; i <= array.length; i++) {
    newArray.push(array[array.length - i])
  }
  return newArray
}

// console.log(desafio2([1,2,3,4,5,6,7,8,9]))

function desafio3(array) {
  const newArray = array.filter((item) => !!item)
  return newArray
}

// console.log(desafio3([1, '', undefined, 0, 4, 'ola', null, false]))

function desafio4(arrays) {
  const metodo = arrays.map((array) => {
    const nome = array[0]
    const valor = array[1]
    return {
      [`${nome}`]: valor,
    }
  })
  const objeto = Object.assign({}, metodo)
  return objeto
}

// const objeto = {}

console.log(
  desafio4([
    ["c", 2],
    ["d", 4],
  ])
)

function desafio5(array, condicao) {
  const arrayFiltrado = array.filter(
    (elemento) => !condicao.includes(elemento)
  )
  return arrayFiltrado
}

// console.log(desafio5([5, 4, 3, 2, 5], [5, 3]))

function desafio6(array) {
  const newArray = array.filter((item, comparador) => {
    return array.indexOf(item) === comparador
  })
  return newArray
}

// console.log(desafio6([1, 2, 3, 3, 2, 4, 5, 4, 7]))

function desafio7(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false
    }
  }
  return true
}

// console.log(desafio7([1, 2, 3, 4],[1, 2, 3, 4]))
// console.log(desafio7([1, 2, 3, 4],[1, 2, 3, 5]))

function desafio8(array) {
  return array.flat()
}

// console.log(desafio8([1, 2, [3], [4, 5]]))

function desafio9(array, condicao) {
  //VOLTAR NESSE
  const newArray = []
  for (let i = 0, posicao = condicao; i < array.length; i++, posicao += condicao) {
    const grupo = array.slice(i * condicao, posicao)
    if (grupo.length) newArray.push(grupo)
  }
  return newArray
}

// console.log(desafio9([1, 2, 3, 4, 5], 2))

function desafio10(array1, array2) {
  const array1Filtrado = array1.filter((elemento) => array2.includes(elemento))
  return array1Filtrado
}

// console.log(desafio10([6, 5, 7], [5, 8, 7]))
