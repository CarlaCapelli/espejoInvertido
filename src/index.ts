let palabra: string = "espejo";
let alReves: string = "";

for (let i: number = palabra.length - 1; i >= 0; i--) {
  alReves = alReves + palabra[i];
}
console.log(alReves);
