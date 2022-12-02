let num1 = Number(prompt("Ingrese un numero"));
let num2 = Number(prompt("Ingrese otro numero"));

let valores = "Primer valor =  " + num1 + "  segundo valor =  " + num2;
let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let divi = num1 / num2;

document.write(valores+ "<br>");
document.write("El valor de la suma es: " + suma + "<br>");
document.write("El valor de la resta es: " + resta+ "<br>");
document.write("El valor de la multiplicacion es: " + multi+ "<br>");
document.write("El valor de la division es: " + divi+ "<br>");