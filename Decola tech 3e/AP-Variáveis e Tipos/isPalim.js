function isPalim(str){
    if (str == str.reverse())
        return "é ";
    else
        return "não é ";
}

var str = Array(prompt("Digite uma palavra e verificaremos se é uma palíndromo:"));
alert("A palavra " + str + " " + isPalim(str) + "um palímdromo");