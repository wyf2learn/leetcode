/**
 * [★]66. Plus One
 * finish: 2016-12-05
 * https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var isJinwei = false;
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] === 10) {
            isJinwei = true;
            digits[i] = 0;
        } else {
            isJinwei = false;
            break;
        }
    }
    if (isJinwei) {
        digits = [1].concat(digits);
    }
    return digits
};

write('algorithms: 66. Plus One', 'title');
write(plusOne([1, 2, 3, 4, 5]));
write(plusOne([9, 9, 9, 9, 9]));