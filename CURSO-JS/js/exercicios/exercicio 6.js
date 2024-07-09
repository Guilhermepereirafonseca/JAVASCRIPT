// FUNÇÃO PARA VALIDAR PRESENÇA DO ALUNO

function avaliarAluno(porcentagemDePresenca, notaA, notaB){
    let media = (notaA + notaB) / 2
    if(media >6 && porcentagemDePresenca > 75){
        return "Passou"
    } else {
        return "Reprovou"
    }
}
console.log(avaliarAluno(65, 6, 10))