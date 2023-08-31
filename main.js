//Solicitud de Nombre y verificación de edad

let nombre  = prompt( "Ingrese su nombre" );
let edad = prompt( "Ingrese su edad" );

if ( edad >= 18 ){
    alert( "Hola " + nombre + " podes ingresar, recorda Beber con moderacion." );
    console.log( "La edad de " + nombre + " es " + edad );
} else {
    alert ( "Hola " + nombre + " no podes Ingresar, sos menor de edad.");
    console.log ("La edad de " + nombre + " es " + edad);
}



//Productos

const vinos = [
    {
        nombre : "Familia Gascón Roble Malbec",
        precio : 1900,
        stock : 1020,
        tipo : "Tinto"
    },
    {
        nombre : "Benjamín Nieto Malbec",
        precio : 1444,
        stock : 1500,
        tipo : "Tinto"

    },
    {
        nombre : "Trapiche Medalla Malbec",
        precio : 4903,
        stock : 7000,
        tipo : "Tinto"
    },
    {
        nombre : "Goye Cabernet Sauvignon",
        precio : 1574,
        stock : 2400,
        tipo : "Tinto"
    },
    {
        nombre : "Del Fin del Mundo Reserva Malbec",
        precio : 2838,
        stock : 3200,
        tipo : "Tinto"
    },
    {
        nombre : "Santa Julia Chenin Dulce Natural",
        precio : 1900,
        stock : 1000,
        tipo : "Blanco"
    },
    {
        nombre : "Goye Tocai",
        precio : 1574,
        stock : 3000,
        tipo : "Blanco"
    },
    {
        nombre : "Benjamín Nieto Colección Tardía Blanco",
        precio : 1506,
        stock : 500,
        tipo : "Blanco"
    },
    {
        nombre : "Emilia Nieto Senetiner Chardonnay",
        precio : 1842,
        stock : 1900,
        tipo : "Blanco"
    },
    {
        nombre : "La Linda Chardonnay",
        precio : 3552,
        stock : 6000,
        tipo : "Blanco"
    },
    {
        nombre : "Aimé Rosé",
        precio : 1900,
        stock : 1500,
        tipo : "Rose"
    },
    {
        nombre : "Goyenechea Merlot Rosé",
        precio : 1574,
        stock : 3000,
        tipo : "Rose"
    },
    {
        nombre : "Benjamín Nieto Colección Tardía Rosado",
        precio : 1506,
        stock : 2500,
        tipo : "Rose"
    },
    {
        nombre : "Lagarde Goes Pink Rosé",
        precio : 2970,
        stock : 1200,
        tipo : "Rose"
    },
    {
        nombre : "José L Mounier Rosado",
        precio : 4455,
        stock : 8000,
        tipo : "Rose"
    }
];




//funciones

/* Por Tipo */
const tinto = vinos.filter((producto) => producto.tipo === "Tinto");
const blanco = vinos.filter((producto) => producto.tipo === "Blanco");
const rose = vinos.filter((producto) => producto.tipo === "Rose");

/*Por Nombre */
const vinoTinto = tinto.map((producto) => producto.nombre );
const vinoBlanco = blanco.map((producto) => producto.nombre );
const vinoRose = rose.map((producto) => producto.nombre );

/*Por Precio */
const precioTinto = tinto.map((producto) => producto.precio );
const precioBlanco = blanco.map((producto) => producto.precio );
const precioRose = rose.map((producto) => producto.precio );

/* Producto por cantidad*/
function carrito( producto , cantidad ){
    const total = producto * cantidad ;
    return total;
}



//Ciclo 

let seleccion = parseInt(prompt( "Seleccione el tipo de Vino que busca:" + " \n 1- Vino Tinto" + " \n 2- Vino Blanco" + " \n 3- Vino Rosé" ));

switch (seleccion) {
    case 1: 
    let producto1 = prompt( "Seleccione el producto: \n" + vinoTinto.join( "\n"));
    console.log( producto1);
    break;

    case 2:  
    let producto2 = parseInt(prompt( "Seleccione el producto: \n" + vinoBlanco.join( "\n")));
    console.log( producto2);
    break;
    case 1: 

    let producto3 = parseInt(prompt( "Seleccione el producto: \n " + vinoRose.join( "\n")));
    console.log( producto3);
    break;

    default : 
    alert ( "¡No ingreso un producto correcto, inentelo nuevamente!");
    console.log( "No ingreso un producto correcto.");
};