/**
 * Singly Linked List
 *
 * A singly linked list is a linear data structure in which the elements are not stored
 * in contiguous memory locations and each element is connected only to its next element
 * using a pointer.
 *
 * Overview
 *  - Linear data structure.
 *  - Elements are not stored in contiguous memory.
 *  - Each element is ONLY connected to the next element using a pointer. This mean
 *    the linear order is not based on physical memory location.
 *  - Each element consists of data and a pointer.
 *
 * Benefits
 *  - Allows for efficient insertion or removal of elements from any position in the sequence during iteration.
 *
 * Drawbacks
 *  - Access time is linear
 *  - Faster access, such as random access, is not feasible
 */

/**
 * @class ListNode
 */
export class ListNode<T> {
  value: T;
  public next: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * @class SinglyLinkedList
 */
export class SinglyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;
  constructor() {}

  /**
   * Adds an item to the end of the list
   * @param value the value to be appended to the list.
   * @returns the new length of the list.
   */
  public push(value: T): number {
    const newNode = new ListNode(value);

    // When empty
    // set the head to the new node
    // set the tail to be the head;
    // this.head.next and this.tail.next should both be null since there is 1 Node.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this.length;
    }

    if (this.head === this.tail) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.length;
    }

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
  }

  /**
   * Removes the last item from the list and returns the node removed
   * or undefined if empty.
   * @returns the new length of the list.
   */
  public pop() {
    // if the list is empty
    if (!this.head) return undefined;

    //if the list only has a head;
    if (this.head === this.tail) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    }

    if (this.length === 2) {
      const oldTail = this.tail;
      this.head.next = null;
      this.tail = this.head;
      this.length--;
      return oldTail;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = previousNode;
    this.tail.next = null;
    this.length--;

    return currentNode;
  }

  /**
   * Removes the item at the beginning of the list and returns the node removed.
   * @returns the node removed from the list
   */
  public shift() {
    if (!this.head) return undefined;

    let initialHead = this.head;

    if (this.head === this.tail && !this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return initialHead;
    }

    this.head = initialHead.next;
    this.length--;
    return initialHead;
  }

  /**
   * Adds an item to the front of the list.
   * @returns the new list length.
   */
  public unshift(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (!this.head.next) {
      this.head.next = newNode;
      this.tail = newNode;
    }

    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
    return this.length;
  }
}
