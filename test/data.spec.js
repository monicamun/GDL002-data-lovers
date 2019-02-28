require ('../src/data/pokemon/pokemon.js');
require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

describe('getAllPokemon', () => {
    it('is a function', () => {
      expect(typeof dataLovers.getAllPokemon).toBe('function');
    });

    it('returns an object', () =>{
     expect(typeof dataLovers.getAllPokemon()).toBe('object');
    });

    it('returns 151 elements', () => {
      expect(dataLovers.getAllPokemon().length).toBe(151);
    });


  });
