const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(typeof(arr) != 'object' || arr === null){
    return false;
  } else {
    console.log(typeof(arr));

    let namesArr = [];

    for(i=0; i<arr.length; i++){
        if(typeof(arr[i]) == 'string'){
            console.log('arr.i=', arr[i]);
            namesArr.push(arr[i].replaceAll(' ', '').slice(0,1).toUpperCase())
        } else {
            console.log('not name');
        }
    }

    console.log('namesArr=', namesArr);

    let str = namesArr.sort().join('');

    console.log('str=', str);

    return str;
  }
}

module.exports = {
  createDreamTeam
};
