'use strict';

function tictactoe ( array ){

  let xo = { x:'o', o:'x' };
  let mid = array[1][1];

  for( let y = 0; y < array.length; y++ ){
    let rowValue = array[y][0];
    if ( !array[y].includes( xo[rowValue] ) ) {
      return rowValue;
    }

    if( y === 0 ){
      for( let x = 0; x < array[y].length; x++ ){
        let currentValue = array[y][x];
        if ( x === 0 || x === 2 ){
          if ( x === 0 && currentValue === mid && array[2][2] === currentValue ){
            return currentValue;
          } else if ( x === 2 && currentValue === mid && array[2][0] === currentValue ){
            return currentValue;
          }
        }
        if ( array[y+1][x] === currentValue && array[y+2][x] === currentValue ) {
          return currentValue;
        }
      }
    }
  }

  return 'none';

}

module.exports = tictactoe;
