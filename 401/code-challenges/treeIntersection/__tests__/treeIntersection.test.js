const Node = require('../node');
const treeIntersection = require('../treeIntersection');

describe('Tests if intersection of values between two trees are listed', () => {

  const oneA = new Node(150);
  const twoA = new Node(100);
  const threeA = new Node(250);
  const fourA = new Node(75);
  const fiveA = new Node(160);
  const sixA = new Node(200);
  const sevenA = new Node(350);
  const eightA = new Node(125);
  const nineA = new Node(175);
  const tenA = new Node(300);
  const elevenA = new Node(500);

  oneA.left = twoA;
  oneA.right = threeA;
  twoA.left = fourA;
  twoA.right = fiveA;
  threeA.left = sixA;
  threeA.right = sevenA;
  fiveA.left = eightA;
  fiveA.right = nineA;
  sevenA.left = tenA;
  sevenA.right = elevenA;

  const oneB = new Node(42);
  const twoB = new Node(100);
  const threeB = new Node(600);
  const fourB = new Node(15);
  const fiveB = new Node(160);
  const sixB = new Node(200);
  const sevenB = new Node(350);
  const eightB = new Node(125);
  const nineB = new Node(175);
  const tenB = new Node(4);
  const elevenB = new Node(500);

  oneB.left = twoB;
  oneB.right = threeB;
  twoB.left = fourB;
  twoB.right = fiveB;
  threeB.left = sixB;
  threeB.right = sevenB;
  fiveB.left = eightB;
  fiveB.right = nineB;
  sevenB.left = tenB;
  sevenB.right = elevenB;

  test('Returns intersection of two trees [100,160,125,175,200,350,500]', () => {
    let array = [];
    let element = null;
    for(element of treeIntersection(oneA, oneB)){
      array.push(element[0]);
    }
    expect(array).toEqual([100,160,125,175,200,350,500]);
  });

});
