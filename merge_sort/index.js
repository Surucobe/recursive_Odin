const test1 = [3, 2, 1, 13, 8, 5, 0, 1]; //0, 1, 1, 2, 3, 5, 8, 13
const test2 = [105, 79, 100, 110]; //79, 100, 105, 110
const test3 = [69]; //69
const test4 = [3, 2, 1, 13, 25, 8, 5, 0, 1]; //0, 1, 1, 2, 3, 5, 8, 13, 25

function mergeSort(array){
  if(array.length === 1) return [array];
  const left = mergeSort(array.slice(0, Math.floor(array.length/2)));
  const right = mergeSort(array.slice(Math.floor(array.length/2)));

  const sortedArr = [...left]
  for(let R in right){
    if(sortedArr[sortedArr.length-1][0] < right[R]) sortedArr.push(right[R])
      
    const lengthToUse = sortedArr.length;

    for(let i = 0; i < lengthToUse; i++){
      if(right[R] !== null){
        if(right[R][0] < sortedArr[i][0]){
          sortedArr.splice(i, 0, right[R]);
          right.splice(R, 1, null)
        }
      }
    }
  }

  return sortedArr;
}

console.log(mergeSort(test1));
console.log(mergeSort(test2));
console.log(mergeSort(test3));
console.log(mergeSort(test4));