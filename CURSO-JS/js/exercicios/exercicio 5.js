// DUAS LISTAS

let listaDeCompras = []
let listaDeFrutas = ["Banana", "Kiwi", "Ameixa", "Morango"]

// Adicionando
listaDeCompras.push("Coxinha")
listaDeCompras.push("Banana")
listaDeCompras.push("Kiwi")
listaDeCompras.push("Pão")

let numeroDeFrutas = 0

listaDeCompras.map((elemento) => {
    if(listaDeCompras.includes(elemento)){
        numeroDeFrutas = numeroDeFrutas + 1
    }
})

if(numeroDeFrutas >= 3){
    console.log("Deu certo, eu tenho 3 ou mais frutas")
} else {
    console.log("Preciso de mais frutas")
}