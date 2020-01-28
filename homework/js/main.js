

function isNotEmpty(array) {
    for (let key in array) { // якщо цикл почав виконуватися об'єкт не пустий
        return array;
    }
    return alert("об'єкт пустий", array); //цикл не почався, об'єкт пустий
}

function arraySum(array){
    let summ = 0;
    for(let i = 0; i < array.length; i++){
        summ += array[i];
    }
    console.log('---', summ );
}

// Перше завдання
let arr = [1, 2, 3, 4, 5, 6];

isNotEmpty(arr);

arraySum(arr);

//---------------------------------

// Друге завдання
let codeObj = [45, 109, 32, 39, 1, 0];

codeObj[23] = 95;

let summ = 0;

for (let key in codeObj) {
    summ += codeObj[key];
}

console.log('---', summ);

// Третє завдання
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

function DataSort(array){
    var n = array.length;
    for (var i = 0; i < n-1; i++)
        { for (var j = 0; j < n-1-i; j++)
            { if (array[j+1] < array[j])
                { var t = array[j+1]; array[j+1] = array[j]; array[j] = t; }
            }
        }
    return array;
}

DataSort(data);

console.log('-----', data);
