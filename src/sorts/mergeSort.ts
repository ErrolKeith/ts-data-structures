/**
 * Merge Sort Overview
 * 
 * Benefits
 * - Works well with larger lists.
 * - Consistent run time.
 * - Handles slow-to-access sequential data efficiently.
 * 
 * Drawbacks
 * - Takes up more space.
 * - Requires more memory for sorting beyond the array implementation.
 * - Smaller lists would benefit from different sorting algorithms.
 */

/**
 * Merge Sort takes advantage of the fact that an array
 * with a length of 0 or 1 is already sorted. After recursively calling
 * mergeSort() until the array returned is sorted (of length 0 or 1), the
 * merge() call will begin to rebuild each portion of the array in order,
 * returning a sorted array.
 *
 * @param array The array to be sorted
 * @returns A sorted array
 */
export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const midpoint = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midpoint));
  const right = mergeSort(array.slice(midpoint));
  return merge(left, right);
}

function merge(left: number[], right: number[]) {
  const sortedArray: number[] = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (right[r] > left[l]) {
      sortedArray.push(left[l]);
      l++;
    } else {
      sortedArray.push(right[r]);
      r++;
    }
  }

  while (l < left.length) {
    sortedArray.push(left[l]);
    l++;
  }

  while (r < right.length) {
    sortedArray.push(right[r]);
    r++;
  }

  return sortedArray;
}
