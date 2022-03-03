/*

    Expressões e operadores

    - Expressions
    - Operators
        Binary
        Unary
        Ternary

*/

let number = 1

console.log(number + 1)

console.log (++number)

console.log(false ? "alo" : "nada")

/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let nome = new String('Barbara')
nome.surName = "Dainese"
let age = new Number(35)

console.log(nome, age)

let date = new Date('2022-03-03')
console.log(date)

/*

    Operadores unários

    typeof
    delete

*/

console.log(typeof"barbara")

const person={
    name: 'Barbara',
    age:35,
}
 
delete person.age
  
console.log(person)

//Operadores aritiméticos

//miltiplicação *
console.log(3*5)

//divisão
console.log(10/2)

//soma
console.log(2+3)

//subtração
console.log(3-2)

//resto da divisão
console.log(11%3)

//incremento
let num = 0
console.log(++num)

//decremento
let numb=3
console.log(--numb)

//exponencial 
console.log(3**2)
