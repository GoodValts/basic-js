let arrCats = [[0, 1, '^^'], [0, '^^', 2, [0, '^^']], ['^^', 1, 2]];

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