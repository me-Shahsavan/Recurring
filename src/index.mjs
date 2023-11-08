
const myArray = [5, 1, 1, 9, 5, 1, 2, 4];
// const myArray = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//it should return 1

const recurring1 = (arr) => {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};
const result = recurring1(myArray);
console.log(result);

const recurring2 = (arr2) => {   // O(n)
  let mymap = {};
  for (let i = 0; i < arr2.length; i++) {
    if (mymap[arr2[i]]) {// is the key exist before ?
      console.log(mymap);
      return arr2[i];
    }
    mymap[arr2[i]] =i;
  }
  return mymap;
};
const result2 = recurring2(myArray);
console.log(result2);
