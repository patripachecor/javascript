let nombre = prompt('Ingrese nombre del alumno');
let nota1 = Number(prompt('Ingrese la primera nota'));
let nota2 = Number(prompt('Ingrese la segunda nota'));
let nota3 = Number(prompt('Ingrese la tercera nota'));
let promedio = (nota1+nota2+nota3)/3;
console.log(`El promedio de las notas ingresadas de ${nombre} es = ${promedio}`);