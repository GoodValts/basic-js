const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  function checkVal(el){
    if(el != undefined && typeof(el) != 'number'){
        return el.toString();
    } else if (el > 0 && typeof(el) === 'number'){
        return el;
    } else {
        if (typeof(el) === 'number'){
            return 1;
        } else {
            return '';
        }
    }
  }

  str = checkVal(str);
  repeatTimes = checkVal(options.repeatTimes);
  separator = checkVal(options.separator);
  addition = checkVal(options.addition);
  additionRepeatTimes = checkVal(options.additionRepeatTimes);
  additionSeparator = checkVal(options.additionSeparator);

  if (separator.length === 0){
    separator = '+';
  }
  if (additionSeparator.length === 0){
    additionSeparator = '+';
  }
  
  function repeat(str, times, separator){
    let newStr = str;
    for(i=0; i<(times-1); i++){
        newStr = newStr + separator + str;
        console.log(newStr);
        console.log('--');
    }
    return newStr;
  }

  str = str + repeat(addition, additionRepeatTimes, additionSeparator);
  return repeat(str, repeatTimes, separator)
}

module.exports = {
  repeater
};
