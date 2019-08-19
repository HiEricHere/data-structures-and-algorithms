'use strict';

const Node = require('./node');

class LinkedList{

  constructor(){
    this.head = null;
  }

  insert( value ){

    let newNode = new Node ( value );

    if ( this.head === null ) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  includes( value ){

    let currentNode = this.head;

    while ( currentNode !== null ) {
      if ( currentNode.value === value ) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;

  }

  toString() {

    let currentNode = this.head;
    let string = '';

    while ( currentNode !== null ) {
      string = `${currentNode.value} ${string}`;
      currentNode = currentNode.next;
    }

    return string;

  }

}

module.exports = LinkedList;
