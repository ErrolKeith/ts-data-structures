import { it, expect } from "vitest";
import { mergeSort } from "./mergeSort";

it("can correctly merge sort an array", () => {
  const unsortedArray = [1, 55, 4, 50, 2, 14, 99, 100];
  const sortedArray = mergeSort(unsortedArray);
  expect(sortedArray).toEqual([1, 2, 4, 14, 50, 55, 99, 100]);
});
