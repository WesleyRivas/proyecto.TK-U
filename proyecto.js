var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;

comision = precioBase * 0.30;

/* El siguiente es un comentario.
 Por favor no elimine los caracteres // que se encuentran al inicio.
 En la siguiente variable usted debe calcular los cargos correspondientes.
 Puede crear la cantidad de variables necesarias para calcular cada uno
 de los recargos que sean necesarios */


// Recargos por edad

    if (edad > 18 && edad < 21){document.write("No se aplican recargos edad entre 18 y 21")}
    else if (edad >= 21 && edad < 25){recargoEdad = precioBase * 0.01}
    else if (edad >= 25 && edad < 30){recargoEdad = precioBase * 0.02}
    else if (edad >= 30 && edad < 40){recargoEdad = precioBase * 0.05}
    else if (edad >= 40 && edad < 50){recargoEdad = precioBase * 0.08}
    else if (edad >= 50 && edad < 65){recargoEdad = precioBase * 0.12}
    else if (edad >= 65){document.write("No se le puede asegurar su edad es mayor a 65")}
    else {document.write("No se le puede asegurar usted no es mayor de 18 anos")}

// Recargos por conyugue


recargos = 0;


totalPagar = precioBase + comision + recargos;
document.write(totalPagar);
