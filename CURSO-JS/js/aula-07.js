// BOOLEAN + OPERADORES LÓGICOS

let podeDirigir = true
let stringTrue = "true"

console.log("O tipo a variavel podeDirigir é: " + typeof podeDirigir)
console.log("O tipo a variavel stringTrue é: " + typeof stringTrue)

let nome1 = "Joao"
let nome2 = "Ana"

console.log(nome1 == nome2)

let ehIgual = nome1 == nome2

console.log(ehIgual)

let numeroA = 20
let numeroB = 15
let comparacao = (numeroA == numeroB)

console.log("Os numeros são iguais? " + comparacao)

let comparacaoDois = (15 < 100)

console.log("Quinze é menor do que cem? " + comparacaoDois)

let lista = ["elemento A", "Elemento B"]

let inclui = lista.includes("elemento C") // verifica se possui esse elemento na lista (retorna true ou false)

console.log(inclui)

let nota1 = 40
let nota2 = 70

let passouDeAno = (nota1 > 60 && nota2 > 60)

console.log("O aluno passou de ano? " + passouDeAno)