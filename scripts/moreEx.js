let multiply = (num1, num2) => {
  return num1 * num2;
}

multiply = (num1, num2) => num1 * num2;

//console.log(multiply(3,6));


let countPositive = (nums) => {
  return nums.filter(v => v > 0).length;
}

//console.log(countPositive(new Array(0,1,3,4,-1,-3)));


let addNum = (nums, num) => {
  return nums.map(n => n + num);
}

//console.log(addNum(new Array(0,1,3,4,-1,-3), 6));

let removeFirstTwo = (words, toRemove) => {
  let numRemovals = 0;
  return words.filter(word => {
    if(word === toRemove && numRemovals < 2){
      numRemovals++;
      return false;
    }
    return true;
  })
}

console.log(removeFirstTwo(['egg', 'apple','egg','ham','egg'], 'egg'));
