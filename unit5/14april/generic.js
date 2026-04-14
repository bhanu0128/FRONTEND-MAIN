"use strict";
function identity(value) {
    return value;
}
let numResult = identity(42);
let strResult = identity("Hello, TypeScript!");
let result = `
Number value: ${numResult} <br>
String value: ${strResult}`;
document.getElementById("output").innerHTML = result;
