const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arrRes = [];

  if (Object.prototype.toString.call(arr) != '[object Array]'){
    return '\'arr\' parameter must be an instance of the Array!';
  } else {
    for(i=0; i<arr.length; i++){
        console.log('i=', i);
        console.log('arr i=', arr[i]);
        if (arr[i] === '--double-next'){
            arrRes.push(arr[i+1]);
        } else if (arr[i] === '--double-prev'){
            arrRes.push(arr[i-1]);
        } else if (arr[i] === '--discard-prev'){
            arrRes.pop();
        } else if (arr[i] === '--discard-next'){
            i++;
        } else if (arr[i] == undefined){
            console.log('und')
        } else {
            arrRes.push(arr[i]);
        }
        console.log('arrRes iter', arrRes);
        console.log('---');
    }
    console.log('arrRes =', arrRes);

    let arrRet = []
    for(i=0; i<arr.length; i++){
      if(arrRes[i] != undefined){
        arrRet.push(arrRes[i]);
      }
    }

    return arrRet;
  }
}

module.exports = {
  transform
};
