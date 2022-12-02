let a = Number (prompt("Ingrese el primer valor"));
let b = Number (prompt("Ingrese el segundo valor"));
let c = Number (prompt("Ingrese el tercer valor"));

let val1 = "Primer valor " +a+  "<br>";
document.write(val1)
let val2 = " segundo valor " +b+ "<br>";
document.write(val2)
let val3 = " Tercer valor " +c+ "<br>";
document.write(val3)

 if (a>b && a>c){
    document.write("el numero "+a+ " es el mayor de los tres");
 }else if (b>a && b>c){
    document.write("el numero "+b+ " es el mayor de los tres");
 } else{
    document.write("el numero "+c+ " es el mayor de los tres");
 }