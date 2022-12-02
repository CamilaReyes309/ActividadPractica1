let npos = 0
let nneg = 0 
let npos2 = 0 
let nneg2 = 0

let uni1 = Number(prompt("Ingrese un numero"));
let uni2 = Number (prompt("Ingrese otro numero"));

let valores = uni1 + " y " +uni2; 


if (uni1 >0 && uni2 <0 || uni1 <0 && uni2 >0){
    nneg2 = nneg2 + 1;
    npos2 = npos2 + 1;
    document.write("la cantidad de numeros positivos es de  "+ npos2+ "<br8>"); 
      }else if (uni1 >0 && uni2 >0){
          npos= npos + 2;
         document.write("la cantidad de numeros positivos es de  "+ npos+ "<br8>");
          } else  
          {nneg= nneg + 2;
          document.write("la cantidad de numeros positivos es de  "+ npos+ "<br8>");
          }
    