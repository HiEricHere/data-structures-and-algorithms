const LinkedList = require('../linkedlist');
const findDuplicateLL = require('../findDuplicateLL');

describe('Should remove duplicate values from a linked list', () => {

  const TestList = new LinkedList;
  TestList.insert(1);
  TestList.insert(2);
  TestList.insert(3);
  TestList.insert(4);
  TestList.insert(5);
  TestList.insert(6);
  TestList.insert(6);

  test('Removes duplicates in a linked list', () => {
    let answer = findDuplicateLL(TestList);
    expect(answer.displayList()).toEqual([6,5,4,3,2,1]);
  });

});
