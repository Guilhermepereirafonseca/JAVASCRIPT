// LISTA DE ALUNOS COM IF | ELSE

let listaDeAlunos = ["João", "Maria", "Alberto","Carlos", "Ana", "Gabriel", "Matheus", "Bruna"]
let alunoNovo = "Antonio"

if(listaDeAlunos.length < 10){
    listaDeAlunos.push(alunoNovo);
    console.log("Consegui adicionar o aluno")
} else {
    console.log("Atingiu o numero maximo de alunos")
}