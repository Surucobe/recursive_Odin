//The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. 
//Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.
const sequence = 8;

function fibs(num){
  if(num <= 1) return 1;

  let result = [];

  for(let i = 0; i < num; i++){
    result.length < 2? 
      result.push(i): 
      result.push(result[i-1] + result[i-2])
  }

  return result;
}

function fibsRecu(num){
  if(num < 3) {
    return [0, 1];
  }

  const result = fibsRecu(num-1);

  result.push(result[result.length-1] + result[(result.length-1)-1]);
  
  return result;
}

console.log(fibs(sequence));
console.log(fibsRecu(sequence));