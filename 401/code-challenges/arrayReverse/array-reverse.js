'use strict';

module.exports = { reverseArray, stretchGoal };

function reverseArray ( array ){

  if ( Array.isArray( array ) ){

    let start = 0;
    let last = array.length - 1;

    for( let i = 0; i < ( array.length/2 ); i++ ){
      let temp = array[start];
      array[start] = array[last];
      array[last] = temp;
      start++;
      last--;
    }

    return array;

  } else return 'Incompatible input.';

}

function stretchGoal ( array ) {

  if ( Array.isArray( array ) ){

    return array.reduce( ( reversedArr, value ) => {
      reversedArr.unshift( value );
      return reversedArr;
    }, [] );

  } else return 'Incompatible input.';
}
