let moneda_colombiana = parseFloat(prompt("Ingrese el valor en pesos colombianos a convertir:"));

dolar = 4000;

conversion = moneda_colombiana / dolar;

alert("El valor agregado en dolares es: " + conversion.toFixed(2) + " USD")
