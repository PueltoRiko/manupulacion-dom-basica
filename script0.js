//MANIPULACIÓN DEL DOM

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input')
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//inserción de código html
h1.innerHTML = 'Patito <br> Feo';
//inserción de texto
h1.innerText = 'Patito <br> Feo';

// console.log(h1.getAttribute('class'));

// cambia el atributo en 
// h1.setAttribute('class', 'rojo');

//para agregar clase
h1.classList.add('rojo');

//para remover clase
h1.classList.remove('verde');

//para interacturar (agregar/quitar) entre propiedades
// h1.classList.toggle('verde');

//devuelve un true/false dependiendo de la clase que le estemos preguntando
// h1.classList.contains('verde');

//Para los "values" no tendríamos que acceder (getAttribute) ni cambiar (setAttribute), podemos hacerlo directamente
input.value = "123";

//Para crear el elemento html que se quiera
//1-creación
const img = document.createElement ('img');
//2-definir atributos
img.setAttribute('src', 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

//para borrar elemento
pid.innerHTML="";

//3-insertando, en este caso la imagen
pid.append(img);