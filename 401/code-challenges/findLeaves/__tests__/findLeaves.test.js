'use strict';

const findLeavesRecursive = require('../findLeavesRecursive');
const findLeaves = require('../findLeaves');
const TreeNodes = require('../treenode');
const List = require('../list');

const one = new TreeNodes(1);
const two = new TreeNodes( 2 );
const three = new TreeNodes( 3 );
const four = new TreeNodes( 4 );
const five = new TreeNodes( 5 );
const six = new TreeNodes( 6 );
const seven = new TreeNodes( 7 );
const eight = new TreeNodes( 8 );
const nine = new TreeNodes( 9 );
const ten = new TreeNodes( 10 );
const eleven = new TreeNodes( 11 );
const twelve = new TreeNodes( 12 );

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.left = twelve;
three.right = six;

four.left = nine;

five.left = ten;

six.left = seven;
six.right = eight;

ten.right = eleven;

// leaves: 8 7 12 11 9

describe( 'Finds all the leaves in a tree', () => {

  test( 'Returns null on edge cases', () => {

    expect(findLeaves(null)).toEqual(null);

  });

  test( 'Returns all leaves', () => {

    expect(findLeaves( one )).toEqual('8 7 12 11 9');

  });

  test( 'Testing targeted remove() for giggles', () => {

    let test = new List;
    test.insert(10);
    test.insert(20);
    test.insert(30);
    test.insert(40);
    test.insert(50);
    expect(test.remove(30).value).toEqual(30);
    expect(test.remove(0)).toEqual(null);
    expect(test.remove(50).value).toEqual(50);
    expect(test.remove(40).value).toEqual(40);

  });

  test( 'Returns all leaves in a tree recursively: tail', () => {
    expect(findLeavesRecursive(one)).toEqual('8 7 12 11 9');
  });

});
