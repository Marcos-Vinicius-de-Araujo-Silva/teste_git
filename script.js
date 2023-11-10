"use strict"

function* questions(){
     const name = yield "Your name?"
     const age = yield "Age?"
     return `Nome: ${name}, age: ${age}`
}

const qts = questions()

console.log(qts.next().value)
console.log(qts.next().value)
console.log(qts.next("Axel").value)
console.log(qts.next(19).value)