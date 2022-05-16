function areEqual(num1,num2){
    if(num1==num2)  return "são";
    else    return "não são";
}
function maiorMenor10(soma){
    if (soma>10){
        return "maior";
    }else{
        return "menor";
    }    
}
function maiorMenor20(soma){
    if (soma>20){
        return "maior";
    }else{
        return "menor";
    }    
}

alert("Escreva 2 numeros e diremos se eles são iguais, se sua soma é > 10 e < 20\n");

var num1 = Number(prompt("Digite o primeiro numero:\n"));
var num2 = Number(prompt("Digite o segundo numero:\n"));
var soma = num1+num2;

alert("os números "+ num1 +" e "+ num2 + " " + areEqual() + " iguais.Sua soma é "+ soma + ", que é " + maiorMenor10(soma) + " que 10 e "+ maiorMenor20(soma) + " que 20.");

let contador = 0
alert(contador++);
