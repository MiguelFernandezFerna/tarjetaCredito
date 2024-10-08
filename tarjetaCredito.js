"use strict";
let tarjeta = prompt("Dime tu tarjeta de crédito para validarla");
function verificarNumeroTarjeta(tarjetas) {
    let cont = 0;
    let numeros_tarjeta = Array.from(tarjetas,Number);
    for (let i = 0; i < numeros_tarjeta.length; i++) {
        let numero=0;
        let finalNumero = 0;
        if (i%2==0) {
            numeros_tarjeta[i]=numeros_tarjeta[i]*2;
            if (numeros_tarjeta[i]>9) {
                numero=numeros_tarjeta[i];
                finalNumero=1+(numero-10);
                numeros_tarjeta[i]=finalNumero;
            }
        }
        cont = cont + numeros_tarjeta[i];
    }
    if (cont%10==0) {
        return true;
    } else {
        return false;
    }
}

let comprobar = verificarNumeroTarjeta(tarjeta);
    if (comprobar==true) {
        alert("El número es válido");
    } else {
        alert("El número no es válido");
    }








