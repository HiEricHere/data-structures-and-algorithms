'use strict';

const functions = require('./array-reverse');
const reverseArray = functions.reverseArray;
const stretchGoal = functions.stretchGoal;
let fxns = [ reverseArray, stretchGoal ];

describe('Reverse an array', () => {

  fxns.forEach( testfxn => {

    test('Does it perform a type check for array being passed in', () => {

      let test = {};
      let array = [ 1, 2, 3 ];

      expect( testfxn(test) ).toEqual('Incompatible input.');
      expect( testfxn(array) ).toEqual([ 3, 2, 1 ]);

    });

    test('Does it reverse arrays of any length (even v odd) or of no length?', () => {

      let even = [ 1, 2, 3, 4, 5, 6 ];
      let odd = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
      let none = [];
      let one = [ 'hi' ];

      expect( testfxn(even) ).toEqual([6,5,4,3,2,1]);
      expect( testfxn(odd) ).toEqual([13,12,11,10,9,8,7,6,5,4,3,2,1]);
      expect( testfxn(none) ).toEqual([]);
      expect( testfxn(one) ).toEqual(['hi']);

    });

  });

});
