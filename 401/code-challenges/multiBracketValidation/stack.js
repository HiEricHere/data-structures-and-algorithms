'use strict';

const Node = require('./node');

class Stack {

  constructor(){
    this.top = null;
  }

  push( value ){

    let newNode = new Node ( value );

    if( !this.top ) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

  }

  pop(){

    if( !this.top ) return null;

    let currentNode = this.top;
    this.top = this.top.next;
    currentNode.next = null;

    return currentNode.value;

  }

  peek(){

    return this.top ? this.top.value : null;

  }

}

module.exports = Stack;
