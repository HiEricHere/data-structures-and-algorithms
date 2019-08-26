#401 Stacks and Queues

# Stacks and Queues
Implement two data structures, a stack and a queue.

## Challenge

Stack
Should have methods:
- Push
- Pop
- Peek

Queue
Should have methods:
- Enqueue
- Dequeue
- Peek

## Approach & Efficiency

Stack

- [x] Can successfully push onto a stack
- [x] Can successfully push multiple values onto a stack
- [x] Can successfully pop off the stack
- [x] Can successfully empty a stack after multiple pops
- [x] Can successfully peek the next item on the stack
- [x] Can successfully instantiate an empty stack

/ Approach /

push( value )
1) If this.top is null, set new Node to this.top.
2) Else set new node.next to this.top, then set this.top to the new Node.

pop()
1) If this.top is null return null.
2) Else make a variable topNode and set it to this.top.
3) Set this.top to equal this.top.next.
4) Set topNode.next to equal null.
5) Return topNode.value.

peek()
1) If this.top is null, return null.
2) Else return this.top.value.

Queue

- [x] Can successfully enqueue into a queue
- [x] Can successfully enqueue multiple values into a queue
- [x] Can successfully dequeue out of a queue the expected value
- [x] Can successfully peek into a queue, seeing the expected value
- [x] Can successfully empty a queue after multiple dequeues
- [x] Can successfully instantiate an empty queue

/ Approach /

enqueue( value )
1) If this.front is null, set this.front and this.rear to the new Node.
2) Else set this.rear.next to the new Node, then set this.rear to the new Node.

dequeue()
1) If this.front is null, return null.
2) Else make a variable frontNode and set it to this.front.
3) Set this.front to this.front.next.
4) Set frontNode.next to null.
5) Return frontNode.value.

peek()
1) If this.front is null, return null.
2) Else return this.front.value.

## API
Methods available to Stack and Queue:
Node class.