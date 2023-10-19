import { it, expect } from "vitest";
import { ListNode, SinglyLinkedList } from "./singlyLinkedList";

it("Can push() to the singly linked list.", () => {
  const list: SinglyLinkedList<string> = new SinglyLinkedList();
  expect(list).toBeInstanceOf(SinglyLinkedList);
  let length = list.push("first item");
  expect(length).toBe(1);
  length = list.push("second item");
  expect(length).toBe(2);
  length = list.push("third item");
  expect(length).toBe(3);
  length = list.push("fourth item");
  expect(length).toBe(4);
});

it("Can pop() from a singly linked list.", () => {
  const popList: SinglyLinkedList<number> = new SinglyLinkedList();
  expect(popList).toBeInstanceOf(SinglyLinkedList);

  expect(popList.pop()).toBe(undefined);

  popList.push(4);
  expect(popList.pop()).toStrictEqual(new ListNode(4));

  popList.push(3);
  popList.push(4);
  expect(popList.pop()).toStrictEqual(new ListNode(4));
  expect(popList.pop()).toStrictEqual(new ListNode(3));

  popList.push(1);
  popList.push(5);
  popList.push(6);
  popList.push(7);
  popList.push(8);
  popList.push(9);
  popList.push(10);

  expect(popList.pop()).toStrictEqual(new ListNode(10));
  expect(popList.pop()).toStrictEqual(new ListNode(9));
  expect(popList.pop()).toStrictEqual(new ListNode(8));
  expect(popList.pop()).toStrictEqual(new ListNode(7));
  expect(popList.pop()).toStrictEqual(new ListNode(6));
  expect(popList.pop()).toStrictEqual(new ListNode(5));
  expect(popList.pop()).toStrictEqual(new ListNode(1));
  expect(popList.pop()).toBe(undefined);
  expect(popList.pop()).toBe(undefined);
});

it("Can shift() a singly linked list", () => {
  const shiftList = new SinglyLinkedList();
  expect(shiftList).toBeInstanceOf(SinglyLinkedList);
  expect(shiftList.shift()).toBe(undefined);

  shiftList.push(1);
  expect(shiftList.shift()).toStrictEqual(new ListNode(1));

  shiftList.push(1);
  shiftList.push(2);

  const shiftedNode = new ListNode(1);
  shiftedNode.next = new ListNode(2);
  expect(shiftList.shift()).toStrictEqual(shiftedNode);

  shiftList.push(1);
  shiftList.push(3);
  shiftList.push(4);
  shiftList.push(5);
  shiftList.push(6);
  expect(shiftList.shift()?.value).toBe(2);
  expect(shiftList.shift()?.value).toBe(1);
  expect(shiftList.shift()?.value).toBe(3);
  expect(shiftList.shift()?.value).toBe(4);
  expect(shiftList.shift()?.value).toBe(5);
  expect(shiftList.shift()?.value).toBe(6);
  expect(shiftList.shift()).toStrictEqual(undefined);
});

it("Can unshift() a singly linked list", () => {
  const unshiftList = new SinglyLinkedList();
  expect(unshiftList).toBeInstanceOf(SinglyLinkedList);
  expect(unshiftList.unshift(1)).toBe(1);
  expect(unshiftList.unshift(10)).toBe(2);
  expect(unshiftList.unshift(100000)).toBe(3);
  expect(unshiftList.unshift(100)).toBe(4);
  expect(unshiftList.unshift(1000)).toBe(5);
  expect(unshiftList.unshift(10000)).toBe(6);
  expect(unshiftList.unshift(100)).toBe(7);
});
