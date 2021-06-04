const arraysLibrary = {
    reduce: reduce,
    take: take,
    map: map,
    filter: filter,
    forEach: forEach,
    skip: skip,
}

let takeInput = document.querySelector("#take")
let skipInput = document.querySelector("#skip")
let mapInput = document.querySelector("#map")
let reduceInput = document.querySelector("#reduce")
let filterInput = document.querySelector("#filter")
let forEachInput = document.querySelector("#forEach")

takeInput.value = JSON.stringify(arraysLibrary.take([1,2,3,4,5], 2));
skipInput.value = JSON.stringify(arraysLibrary.skip([1,2,3,4,5], 2))
mapInput.value = JSON.stringify(arraysLibrary.map([1,2,3,4,5], (elem) => elem**2))
reduceInput.value = JSON.stringify(arraysLibrary.reduce([1,2,3,4,5,6], (accum, elem) => accum + elem, 20))
filterInput.value = JSON.stringify(arraysLibrary.filter([1,2,3,4,5,6], (elem) => elem > 3))
arraysLibrary.forEach([1,2,3,4,5,6], console.log)