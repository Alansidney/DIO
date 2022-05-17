function validArray(array,len){
    try{
        if (!array && !len)     throw new ReferenceError("Parâmetros não enviados");
        if (typeof array !== "object")     throw new TypeError("O array precisa ser do tipo object.");
        if (typeof len !== "number")     throw new TypeError("O tamanho precisa ser do tipo number.");
        if (array.length !== len)     throw new RangeError("O tamanho é inválido!");

        return array;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("ReferenceError");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("TypeError");
            console.log(e.message);
        }
        else if(e instanceof RangeError ){
            console.log("RangeError");
            console.log(e.message);
        }
        else{
            console.log("UnknownError");
        }
    }
}

console.log(validArray([1,2],2));
