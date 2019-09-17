'use strict';

const repeatedWords = require('../repeated-word');

describe('Function correctly identifies first instance of a duplicated word', () => {

  test('Function will return null if no string given or incorrect type given', () => {

    let test1 = null;
    let test2 = [];
    let test3 = '';

    expect(repeatedWords(test1)).toEqual(null);
    expect(repeatedWords(test2)).toEqual(null);
    expect(repeatedWords(test3)).toEqual(null);

  });

  test('Function will return original string if no duplicates found', () => {

    let test = 'it puts the lotion on its skin';
    expect(repeatedWords(test)).toEqual(test);

  });

  test('Function will return first instance of a duplicated word', () => {

    let test1 = 'test one test'; //test
    let test2 = 'one two three four five six seven four eight nine ten'; //four
    let test3 = 'test one one test'; //one

    expect(repeatedWords(test1)).toEqual('test');
    expect(repeatedWords(test2)).toEqual('four');
    expect(repeatedWords(test3)).toEqual('one');

  });

});
