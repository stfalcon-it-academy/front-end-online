/*
function findX (a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);

        console.log('-- x1 = ', x1);
        console.log('-- x2 = ', x2);
    }
    else if (D === 0) {
        x1 = -b / (2 * a);
        console.log('-- x1 = ', x1);
    }
    else {
        console.log('-- рівняння дійсних коренів немає');
    }
}

var a = prompt('Введіть знчення а:');
var b = prompt('Введіть знчення b:');
var c = prompt('Введіть знчення c:');

findX (a, b, c);



function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Введіть x", '');
let n = prompt("Введіть степінь n", '');

    if (n === 0) {
        let n = 2;
        alert( pow(x, n) );
    }
    else if (n < 0) {
        alert(`Степінь ${n} не підтримується, використайте натуральне число`);
    }
    else {
        alert( pow(x, n) );
    }

    */
let obj ={
  //  name: 'Микола',
  //  age: 20
}
function isEmpty() {
    for (let key in obj) { // якщо цикл почав виконуватися об'єкт не пустий
        return alert("об'єкт не пустий", obj);
    }
    return alert("об'єкт пустий", obj); //цикл не почався, об'єкт пустий
}

isEmpty();