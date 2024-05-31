//Desestructuración
//Asignación desestructurante

const persona = {
  nombre: "Tatiana",
  edad: 15,
  clave: "princesa",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

//OTRO EJEMPLO DESESTRUCTURACIÓN EN EL ARGUMENTO
// -desestructuración normal

// const retornaPersona = (usuario) => {
//   const { nombre, edad, clave } = usuario;
//   console.log(nombre, edad, clave);
// }

// desestructuración en el argumento

// const retornaPersona = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

// retornaPersona(persona);

const retornaPersona = ({ nombre, edad }) => ({
  nombreClave1: "Tati",
  anios1: 16,
});

console.log(retornaPersona(persona));

// const userContext = ({ clave, nombre, edad, rango = "Capitana" }) => {

//   return {
//     nombreClave: clave,
//     anios: edad,
//     latlng: {
//       lat: 564654,
//       lng: -65654,
//     },
//   };
// };

const userContext = ({ clave, nombre, edad, rango = "Capitana" }) => ({
  nombreClave: clave,
  anios: edad,
  latlng: {
    lat: 564654,
    lng: -65654,
  },
});

console.log(userContext(persona));

const { nombreClave, anios, latlng: { lat, lng }, } = userContext(persona);

//const { nombreClave, anios, latlng } = userContext(persona);
//const {lat, lng} = latlng;
console.log(nombreClave);
console.log(anios);
console.log(lat, lng);
