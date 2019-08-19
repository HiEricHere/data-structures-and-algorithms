'use strict';

const LinkedList = require('../linked-list');

describe('linked-list.js', () => {

  test('insert() successfully creates a new node', () => {

    let list = new LinkedList;

    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);

  });

  test('includes() searches for a value in the linked list and returns true or false ', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null ];

    testArray.forEach( test => {
      list.insert( test );
    });

    testArray.forEach( test => {
      expect(list.includes( test )).toEqual(true);
    });

    expect(list.includes( {} )).toEqual(false);

  });

  test('toString() returns a string representing all values in the linked list', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null, {}, () => {} ];

    testArray.forEach( test => {
      list.insert( test );
    });

    expect(list.toString()).toEqual('1 true test null [object Object] () => {} ');

  });

});
