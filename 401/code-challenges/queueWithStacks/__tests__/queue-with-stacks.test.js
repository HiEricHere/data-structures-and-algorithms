'use strict';

const Pseudo = require('../queue-with-stacks');

describe('PseudoQueue', () => {

  test('Enqueue enqueues with empty rear stack', () => {

    let pseudo = new Pseudo;

    expect(pseudo.rear.top).toEqual(null);

    pseudo.enqueue(10);

    expect(pseudo.rear.top.value).toEqual(10);
    expect(pseudo.rear.top.next).toEqual(null);

  });

  test('Enqueue enqueues with existing rear stack', () => {

    let pseudo = new Pseudo;

    for( let i = 1; i < 6; i++ ){
      pseudo.enqueue(i);
    }

    expect(pseudo.rear.top.value).toEqual(5);
    expect(pseudo.rear.top.next.value).toEqual(4);

  });

  test('Dequeue dequeues with empty stacks', () => {

    let pseudo = new Pseudo;

    expect(pseudo.dequeue()).toEqual(null);

  });

  test('Dequeue dequeues with empty front', () => {

    let pseudo = new Pseudo;

    pseudo.enqueue(10);
    pseudo.enqueue(20);

    expect(pseudo.front.peek()).toEqual(null);
    expect(pseudo.rear.peek()).toEqual(20);

    pseudo.dequeue();

    expect(pseudo.front.peek()).toEqual(20);

  });

  test('Dequeue dequeues with existing rear and front stack', () => {

    let pseudo = new Pseudo;

    pseudo.enqueue(10);
    pseudo.enqueue(20);
    pseudo.enqueue(30);
    pseudo.dequeue();

    expect(pseudo.front.peek()).toEqual(20);

    pseudo.enqueue(40);
    pseudo.dequeue();

    expect(pseudo.front.peek()).toEqual(30);

  });

});
