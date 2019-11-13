'use strict';

const findValues = (node, allValues, intersection) => {
  if(!node) return;
  if(allValues.has(node.value)){
    intersection.set(node.value);
  } else {
    allValues.set(node.value);
  }
  findValues(node.left, allValues, intersection);
  findValues(node.right, allValues, intersection);
};

const treeIntersection = (nodeOne, nodeTwo) => {
  if(!nodeOne || !nodeTwo) return null;
  let allValues = new Map();
  let intersection = new Map();
  findValues(nodeOne, allValues, intersection);
  findValues(nodeTwo, allValues, intersection);
  return intersection;
};

module.exports = treeIntersection;
