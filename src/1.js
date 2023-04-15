        //CountCats

/*let arrCats = [[0, 1, '^^'], [0, '^^', 2, [0, '^^']], ['^^', 1, 2]];

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

console.log('cnt=', cnt)*/

        //DreamTeam

let arr = [
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
  ]



  if(typeof(arr) != 'object'){
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