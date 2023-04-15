const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrCats) {
  let cnt = 0;

  function flatDeep(arr, d = 1) {
      return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                  : arr.slice();
  };
  
  let arrCh = flatDeep(arrCats, Infinity);

  console.log('arr checked', arrCh);

  for(i=0; i<arrCh.length; i++){
      if(arrCh[i] == '^^'){
          cnt++;
      }
  }

  console.log('cnt=', cnt)

  return cnt;
}

module.exports = {
  countCats
};
