'use strict';

const findDuplicateLL = (linkedlist) => {
  if (!linkedlist.head) return null;
  let prevNode = linkedlist.head;
  let currentNode = linkedlist.head.next || null;
  let valueList = {};
  valueList[prevNode.value] = prevNode.value;
  while(currentNode){
    valueList[currentNode.value]
      ? currentNode = linkedlist.remove(prevNode, currentNode)
      : valueList[currentNode.value] = currentNode.value;
    currentNode = currentNode.next;
    prevNode = prevNode.next;
  }
  return linkedlist;
};

module.exports = findDuplicateLL;
