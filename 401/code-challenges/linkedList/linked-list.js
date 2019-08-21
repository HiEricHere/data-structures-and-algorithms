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
    let array = [];

    while ( currentNode !== null ) {
      array.push( currentNode.value );
      currentNode = currentNode.next;
    }

    return array.join(' ');

  }

  append( value ){

    if( this.head === null ){
      this.head = new Node( value );
    } else {
      appendHelper( this.head, value );
    }

    function appendHelper ( currentNode, value ){
      if( currentNode.next === null ){
        let newTail = new Node( value );
        currentNode.next = newTail;
        return;
      } else {
        currentNode = currentNode.next;
        appendHelper( currentNode, value );
      }
    }

  }

  insertBefore( val, newVal ){

    if( this.head === null){
      this.head = new Node ( newVal );
    } else {
      findVal( this.head, val, newVal );
    }

    function findVal ( currentNode, val, newVal ){
      if( currentNode.next.value === val ){
        let newNode = new Node ( newVal );
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      } else {
        currentNode = currentNode.next;
        findVal( currentNode, val, newVal );
      }
    }

  }

  insertAfter( val, newVal ){

    if( this.head === null){
      this.head = new Node ( newVal );
    } else {
      findVal( this.head, val, newVal );
    }

    function findVal ( currentNode, val, newVal ){
      if( currentNode.value === val ){
        let newNode = new Node( newVal );
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      } else {
        currentNode = currentNode.next;
        findVal( currentNode, val, newVal );
      }
    }
  }

  countBack( k ){

    if ( k < 0 ) return null;

    let tracer = this.head;
    let hounds = null;
    let releaseTheHounds = false;
    let countdown = k;

    while( tracer !== null ){

      if ( countdown === 0 ){
        countdown--;
        hounds = this.head;
        releaseTheHounds = true;
      }

      if ( releaseTheHounds && tracer.next !== null ) {
        tracer = tracer.next;
        hounds = hounds.next;
      } else {
        tracer = tracer.next;
      }

      if ( countdown > 0 ) countdown--;

    }

    return releaseTheHounds ? hounds.value : null;

  }

}

module.exports = LinkedList;
