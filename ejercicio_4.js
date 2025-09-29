let moneda_colombiana = parseFloat(prompt("Ingrese el valor en pesos colombianos a convertir:")); //Se solicita al usuario el valor de pesos colombianos a convertir

dolar = 4000; //Se le asigna un valor a la variable dolar

conversion = moneda_colombiana / dolar; //Se realiza la conversion de moneda 

alert("El valor agregado en dolares es: " + conversion.toFixed(2) + " USD"); //Se imprime el resultado de la conversion
