'use strict';

const findBiggest = require('../findBiggest').findBiggest;
// const compare = require('../findBiggest').compare;
const Node = require('../node');

describe('Finds the biggest number', () => {

  const ten = new Node(10);
  const five = new Node(5);
  const seven = new Node(7);
  const three = new Node(3);
  const nine = new Node(9);
  const twelve = new Node(12);
  const one = new Node(1);
  const eighteen = new Node(18);
  const fifteen = new Node(15);

  ten.left = five;
  ten.right = seven;
  five.left = three;
  five.right = nine;
  three.left = eighteen;
  seven.left = twelve;
  seven.right = one;
  one.left = fifteen;

  test('Finds the biggest number 18', () => {
    expect(findBiggest(ten)).toEqual(18);
  });

  test('Duplicate largest numbers still returns 18', () => {
    one.right = eighteen;
    expect(findBiggest(ten)).toEqual(18);
  });

});
