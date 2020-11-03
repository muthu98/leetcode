// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.var findMedianSortedArrays = function(nums1, nums2) {

    // https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function (nums1, nums2) {
    let value = [...nums1, ...nums2]
    let position
    let final

    value = value.sort((a, b) => a - b)
    console.log(value)
    if (value.length % 2 === 0) {
        position = (value.length / 2)
        final = (value[position] + value[position - 1]) / 2
    }
    else {
        position = Math.floor(value.length / 2)
        final = value[position]
        console.log(final)
    }

    return final
};