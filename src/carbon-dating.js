const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  if(typeof(str) != 'string' || isNaN(parseFloat(str)) == true){
    return false;
  } else {
    let numb = parseFloat(str);
    //console.log('numb=', numb);

    let age = Math.ceil(Math.log(15/numb) / (0.693 / 5730))

    //console.log(age);

    if (numb > 15 || numb <= 0){
      return false;
    } else {
      return age;
    }
  }
}

module.exports = {
  dateSample
};
