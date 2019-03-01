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

  describe('getPokemonByTypeFilter', () => {
    it('is a function', () => {
      expect(typeof dataLovers.getPokemonByTypeFilter).toBe('function');
    });
    it('return an objet', () => {
      expect(typeof dataLovers.getPokemonByTypeFilter()).toBe('object');
    });
  });

  describe('getPokemonByWeaknessesFilter', () => {
    it('is a function', () => {
      expect(typeof dataLovers.getPokemonByWeaknessesFilter).toBe('function');
    });
    it('return an objet', () => {
      expect(typeof dataLovers.getPokemonByWeaknessesFilter()).toBe('object');
    });
  });

  describe('getPokemonByNum', () => {
    it('is a function', () => {
      expect(typeof dataLovers.getPokemonByNum).toBe('function');
    });

  });
