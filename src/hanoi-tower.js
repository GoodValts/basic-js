const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, speed){
  let turns = (2 ** disks) - 1;
  console.log(turns);

  let time = Math.floor(turns * 3600/speed);
  console.log(time);

  let obj = {};
    obj.turns = turns;
    obj.seconds = time;

    console.log(obj);
    
    return obj;
}

module.exports = {
  calculateHanoi
};
