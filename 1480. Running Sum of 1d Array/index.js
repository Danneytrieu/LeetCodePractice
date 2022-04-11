const runningSum = (nums) => {
  nums.reduce((a,c,i,arr) => arr[i] += a)
  return nums
};


// explain [1, 1+2, 1+2+3, 1+2+3+4]
console.log(runningSum([1, 2, 3, 4]), "result [1,3,6,10]");
//prev 0 + array[0]=>1 = 1
//prev 1 + array[1]=>2 = 3 
//prev 3 + array[2]=>3 = 6
//prev 6 + array[3]=>4 = 10