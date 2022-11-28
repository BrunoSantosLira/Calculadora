//Pegando caixa input
var res = window.document.getElementById('numero')

//FIM
res.value = 0
var numeros = []

//sinais
var somando =false
var subtraindo =false
var multiplicando =false
var dividindo =false
//fim
function número1(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 1
        return Number(res.value)
    }
    else {
        res.value +=1
        return Number(res.value)
    }
}


function número2(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 2
    }
    else {
        res.value +=2
    }
}


function número3(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 3
    }
    else {
        res.value +=3
    }
}

function número4(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 4
    }
    else {
        res.value +=4
    }
}

function número5(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 5
    }
    else {
        res.value +=5
    }
}

function número6(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 6
    }
    else {
        res.value +=6
    }
}

function número7(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 7
    }
    else {
        res.value +=7
    }
}

function número8(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 8
    }
    else {
        res.value +=8
    }
}

function número9(){
    var res = window.document.getElementById('numero')
    if (res.value == 0){
        res.value = 9
    }
    else {
        res.value +=9
    }
}

function excluir_todos(){
    var res = window.document.getElementById('numero')
    lista=[]
    numeros=[]
    return res.value = 0
    
}

function excluir_ultimo(){
    var res = window.document.getElementById('numero').value
    document.getElementById('numero').value = res.substring(0, res.length -1)
    
    
}

function número0(){
    var res = window.document.getElementById('numero')
    res.value += 0
    lista.push(0)
}

function botãoponto(){
    var res = window.document.getElementById('numero')
    res.value += "."
    lista.push('.')
    
}

//ADIÇÃO
function mais(){
    var res = window.document.getElementById('numero')
    numeros.push(Number(res.value))
    res.value += "+"
    somando = true
}

function somar(){
    var res = window.document.getElementById('numero')
    var resultado = eval(res.value)
    res.value = resultado
    numeros = []
    somando = false
}

//SUBTRAÇÃO
function menos(){
    var res = window.document.getElementById('numero')
    numeros.push(Number(res.value))
    res.value += "-"
    subtraindo = true
}

function subtrair(){
    var res = window.document.getElementById('numero')
    var resultado =  eval(res.value)
    res.value = resultado
    numeros = []
    subtraindo = false
}

//DIVISÃO
function multiplicação(){
    var res = window.document.getElementById('numero')
    numeros.push(Number(res.value))
    res.value += "*"
    multiplicando = true
}

function multiplicar(){
    var res = window.document.getElementById('numero')
    var resultado =  eval(res.value)
    res.value = resultado
    numeros = []
    multiplicando = false
}
//DIVISÃO
function divisão(){
    var res = window.document.getElementById('numero')
    numeros.push(Number(res.value))
    res.value += "/" 
    dividindo = true
}

function dividir(){
    var res = window.document.getElementById('numero')
    var resultado = eval(res.value)
    res.value = resultado
    numeros = []
    dividindo = false
}

function botãoigual(){
    var res = window.document.getElementById('numero')
    if (somando == true){
        somar()
    }
    else if (subtraindo == true){
        subtrair()
    }
    else if (multiplicando == true){
        multiplicar()
    }
    else if (dividindo == true){
        dividir()
    }
}


