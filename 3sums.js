/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
    let  finalarray = [],target=0
    nums = nums.sort((a, b) => a - b)
 
    if(nums.length<3) return finalarray
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break
   
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1, k = nums.length - 1
        while (j < k)
        {
			let sum = nums[i] + nums[j] + nums[k]

			if (sum === target) {

				finalarray.push([nums[i], nums[j], nums[k]])

				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				j++
				k--

	
			} else if (sum < target) {
				j++

	
			} else { 
				k--
			}
		}




    }



    return finalarray
};