'use strict';

const Node = require('./node');

class List {

  constructor(){
    this.head = null;
  }

  insert( value ){

    let newNode = new Node ( value );

    if ( !this.head ) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  pop(){

    if ( !this.head ) return null;

    let currentNode = this.head;
    this.head = this.head.next;
    currentNode.next = null;

    return currentNode;

  }

  remove( value ){
    if ( this.head.value === value ) return this.pop();
    let currentNode = this.head.next;
    let previousNode = this.head;
    while ( currentNode && previousNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        currentNode.next = null;
        return currentNode;
      } else {
        previousNode = previousNode.next;
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  list(){

    if ( !this.head ) return null;

    let currentNode = this.head;
    let answer = [];

    while( currentNode ){
      answer.unshift( currentNode.value );
      currentNode = currentNode.next;
    }

    return answer.join(' ');

  }
}

module.exports = List;
