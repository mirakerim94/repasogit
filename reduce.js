/*Ejercicio Array 001
Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6*/

const numbers = [6, 1, 34, 94, 3, 17];

const total = numbers.reduce((acc,num) =>{
    return acc+num
})

// codea debajo de este comentario la solucion al ejercicio

console.log(total);
// deberia mostrar 155

/*Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3, 4], la suma de todos los números es 24
Ayuda: ojo con el valor de comienzo*/

const numbers2 = [6, 1, 34, 94, 3, 17];

const total2 = numbers2.reduce((acc,num) =>{
    return acc*num
})

// codea debajo de este comentario la solucion al ejercicio

console.log(total2);
// deberia mostrar 977976

/*Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5*/

const notasDeTPs = [4, 7, 8, 5, 10];
//const notaFinal = 0;
const promedio = notasDeTPs.reduce((acc,num) =>{
 
    return acc+num

    
})/5;
 


// codea debajo de este comentario la solucion al ejercicio

console.log(promedio);
// deberia mostrar 6.8

/**Tenemos un array en una variable libros con libros para leer sobre Javascript.
Usar la función reduce para crear un string con todos los titulos de los libros encerrados en una etiqueta <li></li>.
Mostrar por consola el array nuevo, encerrándolo entre <ul></ul> */


const librosDeJS = [
    "JavaScript for Kids: A Playful Introduction to Programming",
    "Composing Software",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "JavaScript: The Good Parts",
    "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "JavaScript: The Definitive Guide",
    "You Don’t Know JS",
    "JavaScript Allongé: The Six Edition",
  ];
  
  // codear acá la solución del ejercicio

  let strings = librosDeJS.reduce((acc,str) =>{
           return `${acc}<li>${str}</li>`
           
  } ,"")
  console.log(strings)
  
  // el resultado final debería ser
  // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>