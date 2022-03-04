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


//Grouping operator

let total = (2 + 3)*5

console.log(total)

//Condição

//condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos:
//café da manhã top

let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// If ... Else

let temperature = 36.9
let higTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(higTemperature){
    console.log("febre alta")
} else if(mediumTemperature){
    console.log("temperatura média")
}else{
    console.log("saudável")
}

//switch

function calculate(number1, operator, number2){
    let result

    switch(operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '/':
            result = number1 / number2
            break
        case'*':
            result = number1 * number2
            break
        default :
            console.log('não implementado')
            break
    }
return result
}


console.log(calculate(4, '%', 8))

//trow

function sayName(namer = ''){
    if (namer === ''){
        throw 'nome é obrigatório'
    }
    console.log(namer)
}

//try...catch

try{
        sayName('Barbara')
    }catch(e){
    console.log(e)
}

//Estrutura de repetição
//For

for(let i = 10; i>=0; i--){
    console.log(i)
}

//Estrutura de repetição
//while

let x=0

while(x<10){
    console.log(x)
    x++
}


//fot...of

let nameIs = 'Barbara'
let names =['joão', 'paulo', 'roberto']

for(let char of nameIs){
    console.log(char)
}

for(let element of names){
    console.log(element)
}

//for ... in

let person2 = {
    nome: 'Joana',
    idade: 30,
    peso: 56
}

for(let property in person2){
    console.log(property)
    console.log(person2[property])
}
