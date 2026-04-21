export {};

interface Student {
    name: string;
    age: number;
}

function add() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = Number((document.getElementById("age") as HTMLInputElement).value);

    const student: Student = {
        name,
        age,
    };

    const output = document.getElementById("output")!;
    output.innerHTML = `
    <p><b>Name:</b> ${student.name}</p>
    <p><b>Age:</b> ${student.age}</p>
    `;
}

(window as any).addStudent = add;
