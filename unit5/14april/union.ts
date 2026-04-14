// export{}

// //Arrays
// let A: number[] = [1, 2, 3, 6];
// let B: number[] = [3 , 4, 5, 6];

// // Union Function
// function getUnion(arr1: number[], arr2: number[]): number[] {
//     return [...new Set([...arr1, ...arr2])]
// }

// ///Intersection Function
// function getIntersection(arr1: number[], arr2: number[]): number[] {
//     return arr1.filter(value => arr2.includes(value));
// }

// //results
// let unionResult: number[] = getUnion(A, B);
// let intersectionResult: number[] = getIntersection(A, B);


// //TO display it on the webpage
// let result: string =`
// Array A: [${A}] <br>
// Array B: [${B}] <br>
// <b>Union : </b> [${unionResult}] <br>
// <b>Intersection : </b> [${intersectionResult}]`;
// document.getElementById("output")!.innerHTML = result;


// //console
// console.log("Union : ", unionResult)
// console.log("Intersection : ", intersectionResult)



export {};
// array a:["blue ","red","green ","yellow"]
const A: string[] = ["blue ", "red", "green ", "yellow"];
// array b:["red","yellow","pink","purple"]
const B: string[] = ["red", "yellow", "pink", "purple"];

// union function
function getunion(arr1: string[], arr2: string[]): string[] {
    return Array.from(new Set([...arr1, ...arr2]));
}

// intersection function
function getintersection(arr1: string[], arr2: string[]): string[] {
    return arr1.filter((item) => arr2.includes(item));
}

// result
const unionresult: string[] = getunion(A, B);
const intersectionresult: string[] = getintersection(A, B);

// result display
const result1: string = `
array A: [ ${A} ] <br>
array B: [ ${B} ]<br>
<b>Union: [ ${unionresult} ]</b><br>
`;

const result2: string = `
<b>Intersection: [ ${intersectionresult} ]</b><br>
`;

document.getElementById("union-result")!.innerHTML = result1;
document.getElementById("intersection-result")!.innerHTML = result2;

console.log("Union: ", unionresult);
console.log("Intersection: ", intersectionresult);

// union and intersection of a and b


