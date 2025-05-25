//! Utilizando o TypeScript.
//? Ao utilizar o TypeScript ele fará uma inferencia de tipo, neste caso ele sempre vai entender esta variavel como o primeiro tipo atribuido a ela. No caso do exemplo é uma string.
//? No JavaScript poderia passar a mesma variavel como number posteriormente, porém o TypeScript nao permitirá dada a tipagem.
//* O recomendado é sempre deixar o tipo esplicito.
function main(){
    let myName: string = "Nathan";
    console.log(myName);
}

main();