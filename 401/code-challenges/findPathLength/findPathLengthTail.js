'use strict';

let findDistanceTail = ( node, parent, child ) => {

  if ( !node || !parent || !child ) return null;

  if ( node.value === parent ) {
    return findChildDistanceTail( node, child );
  } else return findDistanceTail( node.left, parent, child ) || findDistanceTail( node.right, parent, child );

};

let findChildDistanceTail = ( node, target ) => {

  if ( !node ) return null;
  if ( node.value === target ) return 0;
  else return 1 + findChildDistanceTail( node.left, target ) || 1 + findChildDistanceTail( node.right, target );

};

module.exports = { findDistanceTail, findChildDistanceTail };
