function identity<T>(value: T): T {
    return value;
}

let numResult: number = identity<number>(42);
let strResult: string = identity<string>("Hello, TypeScript!");

let result: string = `
Number value: ${numResult} <br>
String value: ${strResult}`;

document.getElementById("output")!.innerHTML = result;