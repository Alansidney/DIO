function returnEvenNumbers(array){
    let evenNums = [];
    for (let i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenNums.push(array[i]);
        }
    }
    console.log("The even numbers of the list is: ",evenNums);
}

returnEvenNumbers([1,2,3,4,5,6,7,8,9]);