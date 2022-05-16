//Aula 1 - Tipos de Função
//Estrutura inicial da função
/*
function nameFuction(parameters){
    instruções;
    return 
}
*/

//Função anônima () não recebe nome e é atribuida a uma variável

const sum = function(a,b){
    return a+b;
}

//Funções autoinvocáveis

var myName = (
    function (lastName){
        let name="Alansidney ";
        return name+lastName;
    }
)("da Silva");

//Callbacks , Uma função que é usada como argumento para outras funções

const calc = function(op,n1,n2){
    return op(n1,n2);
}
const soma = function(n1,n2){
    return n1+n2;
}
const sub = function(n1,n2){
    return n1-n2;
}

const res = calc(sub,10,5);
console.log(res);

//Aula 2 - Parametros

//Valores padrão
function exp(array,num=1){
    const result = [];
    for (let i=0;i<array.length;i++){
        result.push(array[i]**num);
    }
    return result
}

//Arguments
function findMax(){
    let max = -Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
var max = findMax(1,2,3,4,100,6,7,9);
console.log(max);

//Arrow functions

const soma2 = (a,b) => a+b; 