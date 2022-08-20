var ContainsDuplicates = function(nums) {
    const duplicates = new set(nums);
    if (duplicates.size === nums.length)
        return false;
    return true;
}
let nu = [1, 2, 3, 1];
console.log(ContainsDuplicates(nu));