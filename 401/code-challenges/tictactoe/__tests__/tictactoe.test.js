'use strict';

/*
  [ [ '', '', '' ],
    [ '', '', '' ],
    [ '', '', '' ]
  ];
*/

const tictactoe = require('../tictactoe');

const horizontalWinO =
[ [ 'o', 'x', 'x' ],
  [ 'x', 'x', 'o' ],
  [ 'o', 'o', 'o' ]
];

const verticalWinX =
[ [ 'o', 'x', 'x' ],
  [ 'o', 'o', 'x' ],
  [ 'x', 'o', 'x' ]
];

const diagonalWinX =
[ [ 'x', 'o', 'x' ],
  [ 'o', 'x', 'x' ],
  [ 'x', 'o', 'o' ]
];

const diagonalWinO =
[ [ 'o', 'o', 'x' ],
  [ 'o', 'o', 'x' ],
  [ 'x', 'x', 'o' ]
];

const noWin =
[ [ 'x', 'o', 'x' ],
  [ 'o', 'o', 'x' ],
  [ 'x', 'x', 'o' ]
];

describe('Test win and loss scenarios', () => {

  test('horizontal win', () => {
    expect( tictactoe(horizontalWinO) ).toEqual('o');
  });

  test('vertical win', () => {
    expect( tictactoe(verticalWinX) ).toEqual('x');
  });

  test('diagonal win 1', () => {
    expect( tictactoe(diagonalWinO) ).toEqual('o');
  });

  test('diagonal win 2', () => {
    expect( tictactoe(diagonalWinX) ).toEqual('x');
  });


  test('No one wins', () => {
    expect( tictactoe(noWin) ).toEqual('none');
  });

});
