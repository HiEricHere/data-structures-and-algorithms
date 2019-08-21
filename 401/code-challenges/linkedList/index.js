'use strict';

const List = require('./linked-list');
const list = new List;

let array = [1,2,3,4,5,6,7,8,9,10];

function init ( array ) {
  array.forEach( value => {
    list.append( value );
  });
}

init( array );
