const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log('date=', date)
  if(date == undefined){
    return 'Unable to determine the time of year!';
  } else if (typeof(date) != 'object'){
    return 'Invalid date!';
  } else if (Object.prototype.toString.call(date) != '[object Date]'){
    return 'Invalid date!';
  } else {
    let month = date.getMonth() + 1;

    if (month > 11 || (month <= 2 && month > 0)){
      return 'winter';
    } else if (month > 8){
        return 'autumn';
    } else if (month > 5){
        return 'summer';
    } else if (month > 2){
        return 'spring';
    } else {
        return 'Invalid date!';
    }
  }
}

module.exports = {
  getSeason
};
