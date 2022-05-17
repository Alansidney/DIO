const alunos = [
    {
        nome: "Alan",
        nota: 7.0,
        turma: "A",
    },
    {
        nome: "Renato",
        nota: 8.0,
        turma: "B",
    },
    {
        nome: "Ayana",
        nota: 10.0,
        turma: "C",
    },
];

function getAprovados(array,media=7.5){
    let aprovados = [];

    for(elem of array){
        if(elem.nota>=media){
            aprovados.push(elem);
        }
    }
    return aprovados;
}

let aprovados = getAprovados(alunos);
console.log(aprovados);
console.log(aprovados);
