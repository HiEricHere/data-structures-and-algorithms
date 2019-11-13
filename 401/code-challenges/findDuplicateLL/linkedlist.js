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

  remove(prevNode, currentNode){
    let nextNode = currentNode.next || null;
    prevNode.next = nextNode;
    currentNode.next = null;
    return nextNode;
  }

  displayList(){
    if(!this.head) return null;
    let currentNode = this.head;
    let valueList = [];
    while(currentNode){
      valueList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return valueList;
  }

}

module.exports = LinkedList;
