function subEvenNum(array){
    for(let i = 0; i<array.length;i++){
        if(array[i]%2==0){
            array[i] = 0;
        }
    }
    return array;
}

let array = [0,1,2,3,4,5,6,7,8,9];
console.log("Array original: " + array);
array = subEvenNum(array);
console.log("Novo array: " + array);