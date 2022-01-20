
import superheroes from './superheroes.js';
const all = superheroes;
const random = all[Math.floor(Math.random() * all.length)];
console.log(all);
export {all, random};


