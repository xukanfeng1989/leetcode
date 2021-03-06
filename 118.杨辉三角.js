/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [];

  for (let i = 0; i < numRows; i++) {
    // 注意点：初始化为全 1
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(row);
  }
  return ans;
};
// @lc code=end