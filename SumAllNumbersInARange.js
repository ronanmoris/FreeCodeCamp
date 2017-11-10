function generateRange(minNum, maxNum){
  var range = [];
  range.push(minNum);
  
  while(minNum < maxNum){
    var nextNum = minNum += 1;
    range.push(nextNum);
  }
  return range;
}

function sumRange(range){
  var total = range.reduce(function(accumulator,current){
    return accumulator + current;
  });
 return total;
}

function sumAll(arr) {
  var minNum = Math.min(arr[0], arr[1]);
  var maxNum = Math.max(arr[0], arr[1]);
  
  var range = generateRange(minNum, maxNum);
  
  var sum = sumRange(range);
  
  return sum;
}

sumAll([1, 4]);