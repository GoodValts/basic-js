const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr){
    let cnt = 0;
    let arrayDetector = false;

    function findArr(arr){
      arrayDetector = false
      for(i=0; i<arr.length; i++){
        if (Array.isArray(arr[i]) == true){
          arrayDetector = true;
        }
      }
      return arrayDetector;
    }

    do {
      console.log('arr=', arr);
      findArr(arr);
      console.log('detect arr=', findArr(arr))
      arr = arr.flat();
      console.log('new flated arr =', arr);
      cnt++;
      console.log('cnt=', cnt);
      console.log('---');
    } while (arrayDetector == true)

    console.log('deep=', cnt);
    return cnt;
  }
}

module.exports = {
  DepthCalculator
};
