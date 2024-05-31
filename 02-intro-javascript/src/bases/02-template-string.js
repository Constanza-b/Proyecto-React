

const nombre = 'Camilo';
const apellido = 'Diaz';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);

const getSaludo2 = nombre => 'Hola ' + nombre;
console.log(getSaludo2('Zeppelin'));
