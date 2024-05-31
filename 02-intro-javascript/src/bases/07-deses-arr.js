
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

// const retornaArreglo = () => {
//     return ['ABC', 123];
// }

const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// const userState = (valor) => {
//     return [valor, () => {console.log('Hola mundo')}];
// }

const userState = valor => [valor, () => {console.log('Hola mundo')}];

const arr = userState('Goku');
console.log(arr);

//arr[1]();

// const [nombre, setNombre] = arr;

const [nombre, setNombre] = userState('Goku');

console.log(nombre);
setNombre();

