//import { heroes } from './data/heroes';
//import {heroes} from './data/heroes'

import heroes, { owners } from "../data/heroes";

//console.log(heroes);
//console.log(owners);

// DIFERENTES FORMAS DE UTILIZAR FIND

// const getHeroById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     }else {
//         return false;
//     }
//   });
// };

// console.log(getHeroById(2)); 


/* const getHeroById = (id) => {
  return heroes.find(heroe => heroe.id === id );
};

console.log(getHeroById(4));  */

export const getHeroById = (id) => heroes.find(heroe => heroe.id === id);
//console.log(getHeroById(4)); 

// FILTER

export const getHeroByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
//console.log(getHeroByOwner('Marvel'));

