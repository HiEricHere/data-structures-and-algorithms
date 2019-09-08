'use strict';

const Node = require('../node');
const findPathLength = require('../findPathLength').findPathLength;

const ten = new Node ( 10 );
const seven = new Node ( 7 );
const five = new Node ( 5 );
const eleven = new Node ( 11 );
const twelve = new Node ( 12 );
const one = new Node ( 1 );
const two = new Node ( 2 );
const twenty = new Node ( 20 );

ten.left = seven;
ten.right = five;
seven.left = eleven;
seven.right = twelve;
five.left = one;
five.right = two;
one.right = twenty;

describe ( 'Finds the path length from parent node to child node', () => {

  test( 'If no root, returns null', () => {

    expect(findPathLength( null, 5, 20 )).toEqual(null);
    expect(findPathLength( ten, null, 20 )).toEqual(null);
    expect(findPathLength( ten, 5, null )).toEqual(null);

  });

  test( 'If valid parent and child, returns correct length', () => {

    expect(findPathLength( ten, 5, 20 )).toEqual(2);

  });

});

const findDistanceTail = require('../findPathLengthTail').findDistanceTail;

describe ( 'Finds the path length from parent node to child node - tail method', () => {

  test( 'If no root, returns null', () => {

    expect(findDistanceTail( null, 5, 20 )).toEqual(null);
    expect(findDistanceTail( ten, null, 20 )).toEqual(null);
    expect(findDistanceTail( ten, 5, null )).toEqual(null);

  });

  test( 'If valid parent and child, returns correct length', () => {

    expect(findDistanceTail( ten, 5, 20 )).toEqual(2);

  });

});
