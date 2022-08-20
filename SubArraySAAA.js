var subArrayRanges = function(nums) {
    let res = 0
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            let smallest = nums[i],
                biggest = nums[i]
            for (let k = j; k < i; k++) {
                smallest = Math.min(smallest, nums[k])
                biggest = Math.max(biggest, nums[k])
            }
            res += biggest - smallest
        }
    }
    return res
};


let n = [1, 3, 3];
console.log(subArrayRanges(n));