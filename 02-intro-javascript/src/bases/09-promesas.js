import { getHeroById } from "./08-imp-exp";

// const promesa = new Promise (( resolve, reject ) => {

//   setTimeout(() => {

//     const p1 = getHeroById(2);
//     resolve(p1);
//     //reject(p1);
//     //reject('No se pudo encontrar el héroe');
//   }, 2000 );
// });

// promesa.then( (heroe) => {
//   console.log('Then de la promesa')
//   console.log(heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
