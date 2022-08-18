console.log("hola mundo");
const myName= "Jaqueline";
let myAge= 18;
let x = 3;
const y = 4;
const likesMusic= true;
 console.log("My name is", myName);
 console.log("My age is", myAge);
 console.log("x is", x);
 console.log("y is", y);
 console.log("Does Daniela likes music?", likesMusic);

 let favoriteColor= "blue";
 console.log("my favorite color", favoriteColor);
 console.log("my age",typeof myAge);
 console.log("myName", typeof myName);

 //ejepmlo de ticket de compra
 const sabritas = 10;
 const refresco = 15;
 const cupon = 5;
 let totalProductos;


 totalProductos = sabritas + refresco;
 console.log ("*****************************************");
 console.log ("****************BIENVENIDO***************");
 console.log ("*                                       *");
 console.log ("*                                       *");
 console.log ("* Sabritas...............................", sabritas);
 console.log ("* Refresco...............................", refresco); 
 
 console.log ("El total de es:..........", "$"+totalProductos);
 console.log ("* Descuento..............", "-"+cupon);
 console.log ("* total real:.................","$"+(totalProductos-cupon));

 console.log ("type:", typeof totalProductos);

 let z;
    //operador de suma
 z=x+y;
 console.log("la suma  de "+x+" y "+y+" es "+z);
 
 //operador de resta
 z=x-y;
 console.log("la resta  de "+x+" menos "+y+" es "+z);
 
 //operador de division
 z=x/y;
 console.log("la división  de "+x+" entre "+y+" es "+z);

 //operador de multiplicación
 z=x*y;
 console.log("la multiplicación  de "+x+" por "+y+" es "+z);

 let num = "22";
    x++;
console.log("operador de incremento",x);
    x--;
console.log("operador de decremento",x);
console.log("operador de negacion unaria",-x);
console.log("operador de suma unaria",+num);

//operadores de comparacion
console.log("operador de igualdad", x == y);
console.log("operador de igualdad estricta", x === y);
console.log("operador de desigualdad", x != y);
console.log("operador de desigualdad estricta", x !== y);
console.log("operador mayor que", x > y);
console.log("operador mayor o igual que", x >= y);
console.log("operador menor que", x < y);
console.log("operador menor o igual que que", x <= y);

//uso de condicionales 
if (likesMusic === true){
    console.log("me gusta la musica");
} else {
    console.log("no me gusta la musica");
}

//operador OR
const lovesArt=false;
if (lovesArt == true || likesMusic == true){
    console.log("deberias dedicarte al arte");
} else {
    console.log("deberias dedicarte a otra cosa");
}

//if.. else if..
let compraRealizada = false;
let pisoBarrido = true;

if(compraRealizada === true) {
    let dinero = 10;
}
else if (pisoBarrido === true){
    let dinero = 10;
}
else{
    let dinero = 5;
}

//if.. else if.. mejorado
let dinero;
//se declaró afuera porque debido al scope no se puede poner adentro
if(compraRealizada === true || pisoBarrido === true) {
    //uso de operador de OR ()
    dinero = 20;
}
else{
     dinero = 0;
}

console.log("el dinero del hermanito es:", dinero);


//MISMO EJEMPLO PERO CON OPERADOR and
let dinero2;
let compraRealizada2= true;
let pisoBarrido2 = false;
//se declaró afuera porque debido al scope no se puede poner adentro
if(compraRealizada2 === true && pisoBarrido2 === true) {
    //uso de operador de AND 
    dinero2 = 20;
}
else{
     dinero2 = 0;
}

console.log("el dinero del hermanito es:", dinero2);

//ciclos
for (let i = 0; i < 9; i++)
{
    console.log(i);
}

//ciclo de año de nacimiento a acutalidad y edad
let nac = 2004;
const d = new Date();
let act = d.getFullYear();

for (let year = nac; year<= act; year++)
{ 
    if (year == nac){
    console.log("en "+year+"  yo naci");
     } 
    else if (year-nac==1){
    console.log("en  "+year+"  yo tenia "+(year-nac)+ " año ");
        } 
    else if(year == act){
    console.log("en  "+year+"  yo tenia "+(year-nac)+ " años ");
        }
    else {
    console.log("en  " +year+ "  yo tenia " +(year- nac) + " años ");
        }
}

//ciclo de planas
for (let num2 = 0; num2<= 35; num2++)
{
    console.log("no debo pegarle  mis compañeros");
}

//uso de while para remplazo de for
let year = nac;
while (year <= act) {
  let age = year - nac;
  if (year == nac) {
    console.log('En ' + year + ' yo nací');
  } else if (age == 1) {
    console.log('En ' + year + ' yo tenía ' + age + ' año');
  } else if (year == act) {
    console.log('En el ' + year + ' yo tendré ' + age + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + age + ' años');
  }
  year++;
}

/*function aCelsius(fahrenheit) {
   return (fahrenheit-32) / 1.8;    
}*/

const aCelsius = (fahrenheit) => ((fahrenheit-32)/1.8);
console.log(aCelsius(100));

function playNote(key){
    // Obtenemos la nota
    const noteAudio = document.getElementById(key.dataset.note);
    // Reseteamos la ejecución de la nota
    noteAudio.currentTime = 0;
     // Utilizamos el método play de la nota
     noteAudio.play();
    // Añadimos la clase active
    key.classList.add("active");
    // Agregamos un event listener al evento ended
    noteAudio.addEventListener("ended", () => {
        // Cuando termine de reproducirse el sonido, removemos la clase active
        key.classList.remove("active");
    });
  }

  const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
  const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener("click",() => playNote(key));
});  

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log(nameElement);
nameElement.textContent=myName;
ageElement.textContent=myAge;

if (likesMusic == true){
    likesMusicElement.textContent="Me gusta la música";
} else {
    likesMusicElement.textContent="No me gusta la música";
}

const body = document.querySelector("body");
const text = document.querySelector("p");
text.textContent = "Hola mundo desde el DOM";

body.appendChild(text);
body.removeChild(text);

document.addEventListener("keydown", (e)=>{
    console.log("hola");
    if (e.repeat) return;
    const key = e.key;
    console.log("key",key);
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) 
        playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) 
        playNote(blackKeys[blackKeyIndex]);
  
} );

const personaDS = {
    nombre:{
        primerNombre: "Jaqueline",
        apellidoPaterno: "Hernandez",
        apellidoMaterno: "Patricio",
    }, 
    edad: 18,
    bio: function() {
        console.log(this.nombre.primerNombre+' Tiene '+this.edad+' años');
    },
    presentarseArrowFn: ()=>{console.log(this.nombre.primerNombre)},
    presentarse: function(){
        console.log('Hola! mi nombre es '+this.nombre.primerNombre);
    }
};

const frutas = ["Manzana", "Pera", "Fresa", "Uvas", "Guayaba"];
    frutas[5]= "Piña";
    frutas[0]= "Higo",
    frutas.push("Frambuesa");
    frutas.shift();
    console.log(frutas);

const calificaciones = [10,10,6,7,10,5,4];

const reprobados=calificaciones.find((calificacion)=> calificacion <= 5);
const valorInicial = 0;
const sumadeCalificaciones = calificaciones.reduce(
    (valorPrevio, valorActual) => valorPrevio + valorActual,
    valorInicial);

const promedio2 = sumadeCalificaciones / calificaciones.length;
const arribade8 = calificaciones.map((calificacion)=> calificacion >= 8);
const aprobados = calificaciones.filter((calificacion)=> calificacion >= 6);
console.log("reprobados", reprobados);
console.log("promedio2",promedio2);
console.log("arriba de 8 ", arribade8);
console.log("aprobados", aprobados);

/*const getAge = async () =>  {
    const response = await fetch("https://api.agify.io?name=daniela");
    console.log(response);

    const data = await response.json();
    console.log(data);
}

/*const getAge = () => {
    fetch('https://api.agify.io?name=noe').then((response) => response.json()).then((data) => console.log(data))
}*/

/*const printJuan = () => {
   let age = 10;
   let years = 5;
   console.log("juan" + (age + years)); 
}

const main = async () => {
 await getAge();

    printJuan();
    console.log("pepe");
}

main();*/

const getGuessedAge = async () => {
    const response = await fetch('https://api.agify.io?name=jaqueline');
    const data = await response.json();
    return data.age;
}

const displayGuessedAge = async () => {
    const guessedAgeSpan= document.getElementById("guessedAge");
    const guessedAge = await getGuessedAge();
    guessedAgeSpan.textContent = guessedAge;
}

displayGuessedAge();

/*if (guessedAge > myAge) {
    const edadcorrecta1 = guessedAge > myAge;
    const edadcorrecta = edadcorrecta1();
    const myAge1 = document.getElementById("isGuessRight");
    myAge1.textContent = ("incorrecto");
}

myAge1();*/














































































