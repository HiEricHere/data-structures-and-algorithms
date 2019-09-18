'use strict';

function findBiggest( node ){

  let left, right = null;

  if( node.left ) left = findBiggest( node.left );
  if( node.right ) right = findBiggest( node.right );
  let biggestKid = compare( left, right );

  return compare( node.value, biggestKid );

}

function compare( num1, num2 ){

  if ( num1 && num2 ) {
    if ( num1 > num2 ) {
      return num1;
    } else if ( num2 > num1 ) {
      return num2;
    } else return num1;
  } else return num1 || num2 || null;

}

module.exports = { compare, findBiggest };
