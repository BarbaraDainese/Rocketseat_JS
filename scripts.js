//exercícios

//1. declare uma variável de nome Weight

//let weight;

//2. Que tipo de dado é a variavel acima? 

//console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:

            name: string
            age: number (integer)
            stars: number (float)
            isSubscribed: Boolean

*/

//var name = 'Barbara';
//var age = 35;
//var stars = 4.5;
//var isSubscribed = true;

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> Kg.

    Atenção: substitua <name> <age> <weight> pelos valores de cada propriedade do objeto.
    
*/

let student = {};

console.log(typeof student);

student = {
 name: "Barbara",
 age: 35,
 weight: 60
}

//console.log( student.name  + " de idade " + student.age + " pesa "  + student.weight + " Kg.");

/*
    5. Declare uma  variável do tipo Array de nume students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

*/

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)


*/

students = [
    student
];

console.log(students)

// 7. Coloque  no console o valor da posição 0 no array acima.

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const john = {
    name: "John",
    age: 23,
    weight: 78.8,
    isSubscribed: true

}

students [1] = john

console.log(students)



