let num = Number(prompt('Digite de qual número você quer ver a tabuada'))

let tabuada = Number(prompt(`Digite até onde você quer a tabuada de ${num}`));

for(let i=1; i<=tabuada ; i++){

    console.log (`${num} X ${i} = ${num*i}`);
 
}