

const persona = {
    nombre: 'Rosita',
    apellido: 'Tamayo',
    edad: 47,
    direccion: {
        ciudad: 'Duitama',
        zip: 65463415,
        lat:856446,
        lng:64.6541,
    }
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Luis';


console.log(persona);
console.log(persona2);
