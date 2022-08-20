//First and Last position of an element in a sorted array
var searchRange = function(nums, target) {
    let i = 0;
    let j = nums.length;
    if (j < 1 && nums[j] === target) {
        return [0, 0];
    }
    let x = [];
    while (j > i) {
        if (nums[i] === target) {
            x.push(i);
        }
        i++;
    }
    return x.length == 0 ? [-1, -1] : [x[0], x[x.length - 1]];
};
let n = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(n, target));