const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(numb) {
  function findSumm(str){
      let arr = str.toString().split('');
      console.log('split=', arr);
      for(i=0; i<arr.length; i++){
          //console.log(typeof(arr[i]))
          arr[i] = parseInt(arr[i]);
      }
      console.log('parseInt=', arr);
      let cnt = 0;
      for(i=0; i<arr.length; i++){
          cnt += arr[i];
      }
      console.log('cnt=', cnt);
      console.log('lng=' , cnt.toString().length);
      return cnt;
  }

  while (numb.toString().length > 1){
      console.log('nst.l=', numb.toString().length);
      numb = findSumm(numb);
  }
  console.log('res=', numb);
  return numb;
}

module.exports = {
  getSumOfDigits
};
