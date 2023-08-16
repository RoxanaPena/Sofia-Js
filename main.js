//inicio

let nombre  = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

if (edad >= 18 ){
    alert("Hola " + nombre + " podes ingresar, recorda beber con moderacion.");
    console.log("La edad de " + nombre + " es " + edad);

}else {
    alert ("Hola " +nombre + " no podes Ingresar, sos menor de edad.");
    console.log ("La edad de " + nombre + " es " + edad);
}


//Productos

class Producto {
    constructor( nombre, tipo, precio, stock){
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.stock = stock
    }
}

const prod1 = new Producto ( "Santa Julia Chenin Dulce Natural", "vino Blanco", 1600 , 1000 );
const prod2 = new Producto ( "Familia Gascón Roble Malbec" , "Vino Tinto" , 2145 , 750 );
const prod3 = new Producto ( "Aimé Rosé", "Vino Rose", 1408 , 1000 );


//Calculo de compra
function carrito( producto , cantidad ){
    const total = producto * cantidad ;
    return total;
}



//cliente
let seleccion = prompt (" Eliga un Producto:   "  + prod1.nombre + "    " + prod2.nombre + "     " + prod3.nombre);
switch (seleccion){
    case prod1.nombre:
        let cantidad = Number( prompt ("¿Cuantas unidades desea comprar? "));
        const total1 = carrito (prod1.precio , cantidad);
        console.log ( nombre + " compro "+ cantidad + " "+ prod1.nombre + " El total de la compra es de " + total1 );
        alert (nombre + " Compraste " + cantidad + " " + prod1.nombre + " El total es de " + total1 + "  ¡Gracias por tu compra!");

        break;
    
    case prod2.nombre:
        let cantidad2 = Number( prompt ("¿Cuantas unidades desea comprar? "));
        const total2 = carrito (prod2.precio , cantidad2);
        console.log ( nombre + " compro "+ cantidad2 + " "+ prod2.nombre + " El total de la compra es de " + total2 );
        alert (nombre + " Compraste " + cantidad2 + " " + prod2.nombre + " El total es de " + total2 + "  ¡Gracias por tu compra!");

        break;
    
    case prod3.nombre:
        let cantidad3 = Number( prompt ("¿Cuantas unidades desea comprar? "));
        const total3 = carrito (prod3.precio , cantidad3);
        console.log ( nombre + " compro "+ cantidad3 + " "+ prod3.nombre + " El total de la compra es de " + total3 );
        alert (nombre + " Compraste " + cantidad3 + " " + prod3.nombre + " El total es de " + total3 + "  ¡Gracias por tu compra!");

        break;

    default: 
        alert ("No ingreso ningun producto, Intentelo nuevamente.");
        console.log (nombre + " No ingreso ningun producto.");
}