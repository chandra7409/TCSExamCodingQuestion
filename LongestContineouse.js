var longestSubarray = function(nums, limit) {
    const maxArr = [],
        minArr = [];
    let start = 0,
        end;

    for (end = 0; end < nums.length; end++) {
        while (maxArr.length && nums[end] > maxArr[maxArr.length - 1]) maxArr.pop();
        while (minArr.length && nums[end] < minArr[minArr.length - 1]) minArr.pop();
        maxArr.push(nums[end]);
        minArr.push(nums[end]);
        if (maxArr[0] - minArr[0] > limit) {
            if (maxArr[0] == nums[start]) maxArr.shift();
            if (minArr[0] == nums[start]) minArr.shift();
            start++;
        }
    }
    return end - start;

};
let n = [8, 2, 4, 7];
let limit = 4

console.log(longestSubarray(n, limit));