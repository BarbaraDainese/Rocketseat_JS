//function expression
//function anonymous
//parâmetros (parameters)

let total = 0

const sum = function(number1, number2){
let total = number1+number2
return total
}

let number1 = 34
let number2 = 25

//console.log("o numero 1 é "+ number1)
//console.log("0 numero 2 é "+ number2)
console.log("a soma é " + sum(number1, number2))
console.log(total)

//Função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return 'suco de...' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

// hoisting de função

sayMyName()

function sayMyName()
{
    console.log('Barbara')
}

//arrow function

const sayLastName = ()=>{
    console.log('Dainese')
}

sayLastName()

const myNameIs = (name)=>{
    console.log(name)
}

myNameIs('Barbara Dainese')

//callback function

 function myStatus(status){
    status()
}

myStatus(
    ()=>{
        console.log('função callback')
    }
)

/*

    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword


*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " andando"
    }
}

const barbara = new Person("Barbara")
const paulo = new Person("Paulo")

console.log(barbara.walk())
console.log(paulo.walk())

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

/*

    Type conversion (typecasting) vc Type coersion

    * Alteração de um tipo de dado para outro tipo


*/
     console.log('9' + 5) // transformou (conversão coersitiva) o number para uma string -> saída = 95

     console.log(Number ('9')+ 5) // conversão da string para number -> saída = 14


//Transformar String em um número e número em string

    let string = "123"
     console.log(Number(string))

     let number = 321
    console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

    let word = "paralelepipedo"
    console.log(word.length)

    let numberb = 1234
    console.log(String(numberb).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

    let numberc = 34.0989678
    console.log(numberc.toFixed(2).replace(".", ","))


// Transformar letras maiúsculas em minúsculas e o contrrário também:
    
let phraseone = "programar é melhor que lazzagna"
console.log(phraseone.toUpperCase())


// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let text = "Quero uma casa na praia!"
let myArray = text.split(" ")
console.log(text)
console.log(myArray )
let textWithUnderscore = myArray.join("_")
console.log(textWithUnderscore)

//Verificar de o texto contém a palavra Praia

console.log(text.includes("praia"))











