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
/*
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
  }*/

        //Carbon dating

/*let str = '12';

let numb = parseFloat(str);
console.log('numb=', numb);

let age = Math.ceil(Math.log(15/numb) / (0.693 / 5730))

console.log(age);

if (isNaN(age) == true){
    console.log('Nan, ret false');
  } else {
    console.log('res=', age);
  }*/

        //What season
/*
let date = () => new Date();

console.log(Object.prototype.toString.call(date))

function getSeason(date) {
    console.log('date=', date)
    if(date == undefined){
        return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) != '[object Date]'){
        return 'Invalid date!';
    } else {
        let month = date.getMonth() + 1;
  
        if (month > 11 || month <= 2){
            return 'winter';
        } else if (month > 8){
            return 'autumn';
        } else if (month > 5){
            return 'summer';
        } else {
            return 'spring';
        }
    }
}

console.log(getSeason(date))
/*console.log(typeof(date));

console.log(date.getMonth());

let month = date.getMonth() + 1;

if (month > 11 || month <= 2){
    console.log('winter');
  } else if (month > 8){
    console.log('autumn');
  } else if (month > 5){
    console.log('summer');
  } else {
    console.log('spring');
  }*/

    //Tower of Hanoi

let disks = 5;
let speed = 4074;

function hanoj(disks, speed){
    let turns = (2 ** disks) - 1;
    console.log('turns=', turns);

    let time = Math.floor(turns * 3600/speed);
    console.log('seconds=', time);

    let obj = {};
    obj.turns = turns;
    obj.seconds = time;

    console.log(obj);
    
    return obj;
}

hanoj(disks, speed)