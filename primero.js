let poema = "Inicio del poema";
console.log(poema);

let calificacionFinal = 90; // int 
console.log("calificacionFinal ",calificacionFinal, typeof(calificacionFinal));

let nombre = "Dr. Garcia";
console.log("nombre ",nombre, typeof(nombre))
console.log("primer elemento ", nombre[0])
nombre[0] = 'R';  // cadenas son inmutables
console.log("nombre ",nombre, typeof(nombre))

let estaVivo = true; // bool
console.log("estaVivo? ", estaVivo, typeof(estaVivo));

let estatura = 1.8;
console.log("estatura ", estatura, typeof(estatura))

// Tipo de dato no primitivo
// arreglo

let calificaciones = [80, 90, 100, 70, 90];
console.log(calificaciones, typeof(calificaciones));
console.log(calificaciones[0])

// Funciones Math

const PI = Math.PI;
console.log("Numero PI:",PI);
console.log("Redondeo PI:",Math.round(PI));
console.log("Redondeo abajo:",Math.floor(9.9));
console.log("Redondeo arriba:",Math.ceil(9.9));
console.log("Mayor calificacion:",Math.max(10, 8, 7));

console.log("Mayor calificacion arreglo:",Math.max(...calificaciones));
console.log("Menor calificacion arreglo:",Math.min(...calificaciones))

// random
console.log("Numero aleatorio", Math.random());
console.log("Numero entre el 1 y el 10", Math.ceil(Math.random()*10) )
console.log("raiz cuadara de 4",Math.sqrt(4));
console.log("Elevar 2 a la 32:",Math.pow(2,32))

let escuela = "Unisierra";

let reflexion = `
Mi reflexion: ${escuela} \n
No se de la vida dice carlos \n
Mucho menos del Amor dice isac \n
\'eeeehhh\' dice ruben \n
pero no compila dice \" Kevin \" \n
que le voy a preguntar al CHATGPT dice Maria Jose \n
las funciones \t ... ya no funcionan dice jonathan.
sufrir para merecer \t dice carlos \n
el hotdog mas cerca del sandwich o del taco de ismael \n
ante la duda ... alvaro \n
camaron que se duerme ... adrian \n
la banda dejo de tocar ... memo \n
a caballo regalado no se le mira lo torcido ... Noe \n
`;
console.log(reflexion);


// Metodos de Window
alert("Entraste a mi codigo - Bienvenido Forastero");

let edad = prompt("Ingresa tu edad", "Edad aqui");
console.log("Tu edad es:", edad)
let year = 2025-(parseInt(edad))
alert("Naciste en " + year);

let acepta = true;
let sigue = false;
do {
acepta = confirm("Estas seguro de elimiar el registro?");
console.log("Elimina", acepta)
if (acepta) {
    alert("Registro borrado");
}
else {
    alert("No se borro el registro");
}
sigue = confirm("Deseas tratar de borrar otro registro");
} while (sigue)
