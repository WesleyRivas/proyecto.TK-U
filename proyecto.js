var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var hijos = prompt("¿Tiene hijos?", "SI/NO");


const precioBase = 250;

const comision = precioBase * 0.30;


    /* El siguiente es un comentario.
    Por favor no elimine los caracteres // que se encuentran al inicio.
    En la siguiente variable usted debe calcular los cargos correspondientes.
    Puede crear la cantidad de variables necesarias para calcular cada uno
    de los recargos que sean necesarios */

    // Calculo Edad (lo investigue y no tengo claro como funciona.)

    function calcularEdad(anios) {
        var nacimiento = anios.split("/");
        var datoNacimiento = new Date(nacimiento[2], nacimiento[1] - 1, nacimiento[0]);
        var diferencia = Date.now() - datoNacimiento.getTime();
        var edadDato = new Date(diferencia);
        return Math.abs(edadDato.getUTCFullYear() - 1970);
    }
    
    var edad = calcularEdad(diaNacimiento+"/"+mesNacimiento+"/"+anioNacimiento);
    
    console.log("Su edad es " + edad)
    


    // Recargos por edad

    if (edad > 18 && edad < 21){document.write(recargoEdad = 0)}
     else if (edad >= 21 && edad < 25){recargoEdad = precioBase * 0.01}
     else if (edad >= 25 && edad < 30){recargoEdad = precioBase * 0.02}
     else if (edad >= 30 && edad < 40){recargoEdad = precioBase * 0.05}
     else if (edad >= 40 && edad < 50){recargoEdad = precioBase * 0.08}
     else if (edad >= 50 && edad < 65){recargoEdad = precioBase * 0.12}
     else if (edad >= 65){document.write("No se le puede asegurar su edad es mayor a 65")}
     else {document.write("No se le puede asegurar usted no es mayor de 18 anios")}
     
     console.log(recargoEdad)

    // Recargos por conyuge

    if (conyuge == "si"){edadConyuge = prompt("ingrese la edad del conyugue ")}
        else {edadConyuge = 0}
    
        
    
    if (edadConyuge > 0 && edadConyuge < 30){recargoConyuge = precioBase * 0.01}
     else if (edadConyuge >= 30 && edadConyuge < 40){recargoConyuge = precioBase * 0.02}
     else if (edadConyuge >= 40 && edadConyuge < 50){recargoConyuge = precioBase * 0.03}
     else if (edadConyuge >= 50 && edadConyuge < 70){recargoConyuge = precioBase * 0.05}
     else if (edadConyuge == 0){recargoConyuge = 0}
     
     
     console.log("la edad del conyugue es " + edadConyuge)
     console.log("los recargos por conyugue son " + recargoConyuge)

     // Recargos por cantidad de Hijos
     if (hijos == "si"){cantidadHijos = prompt("ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");}
        else {cantidadHijos = 0}

      recargoHijos = (precioBase * 0.01) * cantidadHijos

      console.log("Los recargos por hijos son " + recargoHijos)

recargos = recargoEdad + recargoConyuge + recargoHijos;


totalPagar = precioBase + comision + recargos;

// Datos del cliente, desglose y total a pagar

document.write("Bienvenidos a seguros TK-U <br><br>" +
                "Muchas Gracias " + nombreCompleto + " Por Preferirnos<br>" +
                "Los cargos aplicados son: <br>" +
                "Precio Base:------------ Q. " + precioBase + "<br>" +
                "Comision:--------------- Q. " + comision + "<br>" +
                "Cargos por Edad:------- Q. " + recargoEdad + "<br>" + 
                "Cargos por Conyuge:-- Q. " + recargoConyuge + "<br>" + 
                "Cargos por Hijo:-------- Q. " + recargoHijos + "<br>" +
                "-------------------------------------------<br>" + 
                "Total a Pagar:-------------Q. " + totalPagar )
