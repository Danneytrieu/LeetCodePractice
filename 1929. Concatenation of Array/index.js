// duplicate the provided array
// put both arrays in same result array
// example (num): [0,2,3,6] => [0,2,3,6,0,2,3,6]
// example (char): [a,v,t] => [a,v,t,a,v,t]

const getConcatenation = (nums) => [...nums, ...nums];

console.log(getConcatenation([0, 2, 3, 6]));
console.log(getConcatenation(["a", "v", "t"]));
