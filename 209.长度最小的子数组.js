/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity
  let sum = 0
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      ans = Math.min(ans, j - i + 1)
      sum -= nums[i]
      i++
    }
  }
  // 注意点
  return ans === Infinity ? 0 : ans
};
// @lc code=end

/*
给定一个含有 n 个正整数的数组和一个正整数 target。

找出该数组中满足其和≥ target 的长度最小的 连续子数组[numsl, numsl + 1, ..., numsr - 1, numsr]， 并返回其长度。 如果不存在符合条件的子数组， 返回 0。
*/