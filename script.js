const n1 = +prompt("Digite um número: ");
const n2 = +prompt("Digite outro número: ");

const sum = n1 + n2;
const division = n1 / n2;
const mult = n1 * n2;
const rest = n1 % n2;
const subtract = n1 - n2;
const even = sum % 2 === 0;
const equal = n1 === n2;

alert(`Soma: ${sum}, divisão: ${division}, multiplicação: ${mult}, resto da divisão: ${rest}, subtração: ${subtract}.`);

if(even){
  alert("A soma dos dois números é par.")
}else{
  alert("A soma dos dois números é ímpar.")
}

if(equal){
  alert("Os dois números são iguais.")
}else{
  alert("Os dois números são diferentes.")
}