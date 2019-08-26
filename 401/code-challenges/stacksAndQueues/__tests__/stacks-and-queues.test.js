'use strict';

const SnQ = require('../stacks-and-queues');
const Stack = SnQ.Stack;
const Queue = SnQ.Queue;

describe('Stack tests', () => {

  test('Can successfully instantiate an empty stack', () => {

    let stack = new Stack;

    expect(stack.top).toEqual(null);

  });

  test('Can successfully push onto a stack', () => {

    let stack = new Stack;

    stack.push(50);

    expect(stack.top.value).toEqual(50);
    expect(stack.top.next).toEqual(null);

  });

  test('Can successfully push multiple values onto a stack', () => {

    let stack = new Stack;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => stack.push( value ) );

    let currentNode = stack.top;
    let idx = array.length-1;

    while ( currentNode !== null ){
      expect( currentNode.value === array[idx] );
      idx--;
      currentNode = currentNode.next;
    }

  });

  test('Can successfully peek the next item on the stack', () => {

    let stack = new Stack;

    expect(stack.peek()).toEqual(null);

    stack.push(100);

    expect(stack.peek()).toEqual(100);

  });

  test('Can successfully pop off the stack', () => {

    let stack = new Stack;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => stack.push( value ) );

    expect(stack.peek()).toEqual(50);

    stack.pop();

    expect(stack.peek()).toEqual(40);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.peek()).toEqual(10);

  });

  test('Can successfully empty a stack after multiple pops', () => {

    let stack = new Stack;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => stack.push( value ) );

    // eslint-disable-next-line no-unused-vars
    array.forEach( value => stack.pop() );

    expect(stack.peek()).toEqual(null);
    expect(stack.pop()).toEqual(null);

  });

});

describe('Queue tests', () => {

  test('Can successfully instantiate an empty queue', () => {

    const queue = new Queue;

    expect(queue.front).toEqual(null);
    expect(queue.rear).toEqual(null);

  });

  test('Can successfully enqueue into a queue', () => {

    const queue = new Queue;

    queue.enqueue( 10 );

    expect(queue.front.value).toEqual(10);
    expect(queue.front.next).toEqual(null);
    expect(queue.rear.value).toEqual(10);
    expect(queue.rear.next).toEqual(null);

  });

  test('Can successfully enqueue multiple values into a queue', () => {

    const queue = new Queue;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => queue.enqueue( value ) );

    expect(queue.rear.value).toEqual(50);
    expect(queue.rear.next).toEqual(null);

    let currentNode = queue.front;
    let idx = 0;

    while( currentNode !== null ){
      expect(currentNode.value).toEqual( array[idx] );
      idx++;
      currentNode = currentNode.next;
    }

  });

  test('Can successfully peek into a queue, seeing the expected value', () => {

    const queue = new Queue;

    expect(queue.peek()).toEqual(null);

    queue.enqueue(1000);

    expect(queue.peek()).toEqual(1000);

  });

  test('Can successfully dequeue out of a queue the expected value', () => {

    const queue = new Queue;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => queue.enqueue( value ) );

    let valueIsZero = queue.dequeue();

    expect(valueIsZero).toEqual(0);

    let valueIsTen = queue.dequeue();

    expect(valueIsTen).toEqual(10);

  });

  test('Can successfully empty a queue after multiple dequeues', () => {

    const queue = new Queue;

    let array = [ 0,10,20,30,40,50 ];

    array.forEach( value => queue.enqueue( value ) );

    // eslint-disable-next-line no-unused-vars
    array.forEach( value => queue.dequeue());

    expect(queue.peek()).toEqual(null);
    expect(queue.dequeue()).toEqual(null);

  });

});
