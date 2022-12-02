let val1 = Number(prompt("Ingrese el primer valor"));
let val2 = Number(prompt("Ingrese otro valor"));

let valores = "Primer valor =  " + val1 + "  segundo valor =  " + val2;

document.write(valores+ "<br>");

if (val1 == val2){
    document.write(val1 +"  y  "+ val2+ "  son iguales")
}else{
    document.write(val1 +"  y  "+ val2+ "  no son iguales")
}
