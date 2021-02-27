//Criar um programa que calcula a média
//Das notas entre os alunos
//E envia mensagem do cálculo da média

const aluno1 ='Mateus';
const notaAluno1 = 7.5;

const aluno2 ='Pedro';
const notaAluno2 = 2.6;

const aluno3 ='Daniel';
const notaAluno3 = 2.5;

//Calculo da média
const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

//Condicionais
//Se a média for maior que 5, parabenizar os alunos

if(media > 5){
    console.log(`Parabéns, a média foi de ${media}!`);
}else{
    console.log(`Estudem mais!`);
}