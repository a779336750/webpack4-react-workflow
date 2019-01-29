const sort = arr => {
  let len = arr.length;
  if (len <= 1) return arr;
  let left = [];
  let right = [];
  let i = 0;
  let middle = arr.splice(Math.floor(len / 2), 1)[0];
  for (; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat([middle], sort(right));
};
export default sort;
