var minimumSize = function(nums, maxOperations) {
    let low = 1
    let high = Math.max(...nums)

    while (low <= high) {
        let mid = Math.floor((high - low) / 2 + low)
        let count = 0
        nums.forEach(n => count += Math.floor((n - 1) / mid))

        if (count <= maxOperations) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low;
};