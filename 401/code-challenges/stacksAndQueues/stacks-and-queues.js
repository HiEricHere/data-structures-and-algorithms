'use strict';

const Node = require('./node');

class Stack {

  constructor(){
    this.top = null;
  }

  push( value ){

    let newNode = new Node ( value );

    if ( this.top === null ) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    return this.top;

  }

  pop(){

    if ( this.top === null ) return null;

    let topNode = this.top;
    this.top = topNode.next;
    topNode.next = null;

    return topNode.value;

  }

  peek(){

    return this.top === null ? null : this.top.value;

  }

}

class Queue {

  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue( value ){

    let newNode = new Node ( value );

    if ( this.front === null ) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    return this.rear;

  }

  dequeue(){

    if ( this.front === null ) {
      return null;
    } else {
      let frontNode = this.front;
      this.front = this.front.next;
      frontNode.next = null;
      return frontNode.value;
    }

  }

  peek(){

    return this.front === null ? null : this.front.value;

  }

}

module.exports = { Stack, Queue };
