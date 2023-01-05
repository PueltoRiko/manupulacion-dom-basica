const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// addEventListener: se le debe enviar 2 argumentos ('nombre del evento','función a ejecutar (en js)')
// btn.addEventListener('click', btnOnClick);

// function btnOnClick () {
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado " + sumaInputs;
// }

//En addEventListener las acciones del último boton no funcionan como en el caso anterior dentro de formularios html, para ello empleamos:
// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     //para imprimir contenido de event
//     // console.log({event}); 
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado " + sumaInputs;
// }

//otra manera de resolver addEventListener en formularios es asignar type="button" en el html ya que el form asigna submit  de manera predeterminada
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado " + sumaInputs;
}