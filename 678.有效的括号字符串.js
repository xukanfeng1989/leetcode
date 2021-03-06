/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let left = [],
    star = []
  for (let i = 0; i < s.length; i++) {
    // 注意点：栈中保存索引
    if (s[i] === "(") left.push(i)
    if (s[i] === "*") star.push(i)
    if (s[i] === ")") {
      if (left.length === 0) {
        if (star.length === 0) return false
        star.pop()
      } else {
        left.pop()
      }
    }
  }
  if (left.length > star.length) return false
  while (left.length && star.length) {
    // 注意点：如果 * 右边有 ( ，返回 false
    if (left.pop() > star.pop()) return false
  }
  return true
};
// @lc code=end