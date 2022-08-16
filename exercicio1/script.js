let pergunta = prompt('Você deseja mais uma coxinha? "S" para sim e "N" para não.');
let conta = 0



while(pergunta !== "N"){
    conta++ 
    pergunta = prompt('Você deseja mais uma coxinha? "S" para sim e "N" para não.')

};

let contaFinal = conta*2.5

alert (`A sua conta é de R$ ${contaFinal}`);