function desafio1(number, string) {
  const array = []
  for (let i = 0; i < number; i++) {
    array.push(string)
  }
  return array
}

console.log({ desafio1: desafio1(2, "gcb") })

function desafio2(array) {
  const newArray = []
  for (let i = 1; i <= array.length; i++) {
    newArray.push(array[array.length - i])
  }
  return newArray
}

console.log({ desafio2: desafio2([1, 2, 3, 4, 5, 6, 7, 8, 9]) })

function desafio3(array) {
  const newArray = array.filter((item) => !!item)
  return newArray
}

console.log({
  desafio3: desafio3([1, "", undefined, 0, 4, "ola", null, false])
})

function desafio4(array) {
  const newArray = array.flat()
  const newObject = Object.assign({}, newArray)
  return {
    [`${newObject[0]}`]: newObject[1],
    [`${newObject[2]}`]: newObject[3],
  }
}

console.log({
  desafio4: desafio4([
    ["c", 2],
    ["d", 4],
  ]),
})

function desafio5(array, condicao) {
  const arrayFiltrado = array.filter(
    (elemento) => !condicao.includes(elemento)
  )
  return arrayFiltrado
}

console.log({ desafio5: desafio5([5, 4, 3, 2, 5], [5, 3]) })

function desafio6(array) {
  const newArray = array.filter((item, comparador) => {
    return array.indexOf(item) === comparador;
  })
  return newArray
}

console.log({ desafio6: desafio6([1, 2, 3, 3, 2, 4, 5, 4, 7]) })

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

console.log({ desafio7: desafio7([1, 2, 3, 4], [1, 2, 3, 4]) })
console.log({ desafio7: desafio7([1, 2, 3, 4], [1, 2, 3, 5]) })

function desafio8(array) {
  return array.flat()
}

console.log({ desafio8: desafio8([1, 2, [3], [4, 5]]) })

function desafio9(array, condicao) {
  const newArray = []
  for (
    let i = 0, posicao = condicao;
    i < array.length;
    i++, posicao += condicao
  ) {
    const dupla = array.slice(i * condicao, posicao)
    if (dupla.length) newArray.push(dupla)
  }
  return newArray
}

console.log({ desafio9: desafio9([1, 2, 3, 4, 5], 2) })

function desafio10(array1, array2) {
  const array1Filtrado = array1.filter((elemento) => array2.includes(elemento))
  return array1Filtrado
}

console.log({ desafio10: desafio10([6, 5, 7], [5, 8, 7]) })