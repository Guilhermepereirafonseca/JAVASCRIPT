// FUNÇÕES

function preparativoParaReceita(){
    console.log("Deixar tudo limpo")
    console.log("Ter os ingredientes")
    console.log("Pre aquecer o forno")
}

function rotina(){
    console.log("Acordar")
    console.log("Escovar os dentes")
}

function soma(numeroA, numeroB){ // definindo os parametros
    let soma = numeroA + numeroB
    console.log(soma)
}

function calcularMedia(notaA, notaB, notaC){
    let soma = notaA + notaB + notaC
    let media = soma / 3
    return media // vai retornar o resultado
}

// Chamando as funções
preparativoParaReceita();
rotina();
soma(20, 23); // colocando os parametros
calcularMedia(10, 5, 9) // colocando os parametros