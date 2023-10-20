import { it, expect } from "vitest";
import { Patient, WaitingRoom } from "./queue";

it("Can create and service a Waiting Room Queue", () => {
  const queue = new WaitingRoom();
  expect(queue).toBeInstanceOf(WaitingRoom);

  const first: Patient = { name: "First Patient", age: 45 };
  const second: Patient = { name: "Second Patient", age: 25 };
  const third: Patient = { name: "Third Patient", age: 35 };
  const fourth: Patient = { name: "Fourth Patient", age: 55 };
  const fifth: Patient = { name: "Fifth Patient", age: 80 };

  queue.enqueue(first);
  expect(queue.size()).toBe(1);
  expect(queue.dequeue()).toStrictEqual(first);

  const patients = [first, second, third, fourth, fifth];

  patients.forEach((patient) => {
    queue.enqueue(patient);
  });

  expect(queue.size()).toBe(5);

  for (let i = queue.size(); i >= 0; i--) {
    const removed = queue.dequeue();
  }

  expect(queue.size()).toBe(0);
});
