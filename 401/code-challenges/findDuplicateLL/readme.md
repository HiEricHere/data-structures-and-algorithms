## Find & Remove Duplicates in a Singly Linked List

Given a linked list, return the list with all duplicates removed.

## Approach and Efficiency

- [x] Removes all duplicates in linked list.

/ Approach /

- Traverse the linked list with two pointers: a previous Node that is initially set as the linked list's this.head, and a current Node set to this.head.next.
- Initialize an object with an initial property set to previous Node's value (this.head.value).
- Traverse the linked list:
  - if the object containing node values contains current node's value then remove the node.
  - else add the current node's value to the object.
- Return the linked list.
   
/ Efficiency /

Time: O(n)
  Discovering duplicates necessitates traversing the entire linked list, n being the length of the linked list.
Space: O(n)
  Keeping track of each node's value in a separate object means worst case scenario there are no duplicates and an object of equal length of the linked list is created as a result.
