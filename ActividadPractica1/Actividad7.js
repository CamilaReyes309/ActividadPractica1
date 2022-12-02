let a1 = Number(prompt ("Ingrese un numero"));
let a2 = Number(prompt ("Ingrese otro numero"));
 
let result = a1 / a2;

 if (a1 >0 && a2 == 0<0){
    document.write("NO se puede realizar la operacion");
 } else {
    document.write("El resultado de la division es  "+result);
}