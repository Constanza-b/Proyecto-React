// funciones en js

const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre2) => {
    return `Hola, ${nombre2}`;
}

const saludar3 = (nombre3) => `Hola, ${nombre3}`;

const saludar4 = () => `Hola, Tatis`;

console.log(saludar('Zeppelin'));
console.log(saludar2('Nancy'));
console.log(saludar3('Princesa'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC6521',
    username: 'juanchaco67',   
});

console.log(getUser());

// otro ejemplo 

function getUsuarioActivo (nombre4){
    return{
        uid: 'agc45641',
        username: nombre4,
    }
};
const usuarioActivo = getUsuarioActivo('Constanza');
console.log(usuarioActivo);

const getUsuarioActivo1 = (nombre5) => ({
        uid: 'agc45641',
        username: nombre5,
});
const usuarioActivo1 = getUsuarioActivo1('Juan Camilo');
console.log(usuarioActivo1);
