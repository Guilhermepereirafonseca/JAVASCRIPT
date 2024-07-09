// METODO MAP + PROPRIEDADE

let lista = ["Arroz", "Feijão", "Carne", "Azeite", "Pão"]

lista.map((item) => {
    console.log(item)
})

let listaNotas = [8, 9.5, 4, 10, 6]

listaNotas.map((notas) => {
    let numero = notas + 1
    console.log(numero)
})

console.log("Tamanho da lista é ")
console.log(lista.length) // mostra o tamanho da lista (elementos)