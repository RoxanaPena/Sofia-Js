let nombre  = prompt("Ingrese su nombre");

let edad = prompt("Ingrese su edad");

let producto = 1600;


if (edad >= 18 ){
    alert("Hola " + nombre + " podes ingresar, recorda beber con moderacion.");
    console.log("La edad de " + nombre + " es " + edad);

    let productoElejido = Number(prompt( "Elije el producto que quiere comprar: 1-Vino Blanco 2-Vino Tinto 3-Vino Rose."));
    switch (productoElejido){
        case 1:
            let producto1 = 1600;
            let cantidad1 = Number(prompt( "El Vino Blanco tiene una valor de $1.600. Ingrese la cantidad de unidades que desea comprar."));
            let totalProducto1 = carrito(producto1, cantidad1);
            console.log( totalProducto1);
            alert ("El total de tu compra es " + totalProducto1 + " ¡Gracias por tu compra!");

            break;
    
        case 2:
            let producto2= 1900;
            let cantidad2 = Number(prompt( "El Vino Tinto tiene una valor de $1.900. Ingrese la cantidad de unidades que desea comprar."));
            let totalProducto2 = carrito (producto2, cantidad2);
            console.log( totalProducto2 );
            alert ("El total de tu compra es " + totalProducto2 + " ¡Gracias por tu compra!");

            break;  

        case 3:
            let producto3= 1200;
            let cantidad3 = Number(prompt( "El Vino Rose tiene una valor de $1.200. Ingrese la cantidad de unidades que desea comprar."));
            let totalProducto3 = carrito (producto3, cantidad3);
            console.log( totalProducto3);
            alert ("El total de tu compra es " + totalProducto3 + " ¡Gracias por tu compra!");

            break;

        default:
            console.log("No eligio ningun producto.");
            alert("No eligio ningun producto.");
    }



}else {
    alert ("Hola " +nombre + " no podes Ingresar, sos menor de edad.");
    console.log ("La edad de " + nombre + " es " + edad);
}




//Calculo de compra
function carrito( producto, cantidad){
    return producto * cantidad;
}