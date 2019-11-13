## Find Values that Intersect between Two Binary Trees

Given the root of two trees, find the intersection of values.

## Approach and Efficiency

- [x] Finds all shared values between two trees.

/ Approach /

- Initialize two variables: one for universal values and one for intersecting values.
- Traverse both trees, one at a time, recursively.
- If the current node's value is already included in the universal list, add to intersecting list. Else add to universal list.
- Return the list of intersecting values.
   
/ Efficiency /

Time: O(n)
  Because we need to check each value in each tree, it is O(n), n being the total number of nodes on the two trees.
Space: O(n)
  Technically O(2n). Because we need to keep track of a universal list of values in a separate Map, worst case scenario would be two trees with unique values. However, the case where the trees have all identical values would have equally sized universal and intersecting Maps, so (2n).
