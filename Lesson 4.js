// #I2XsG6f

function square(a, b) {
    const result = a*b;
    console.log(result);
    return result;
}
square(3, 8)

// Task #ETGAxbEn8l

function squareKolo(r) {
    return Math.PI*r*r;
}
console.log(squareKolo(10));

// Task #Mbiz5K4yFe7

function squareCilinder(r, h) {
    return 2 * Math.PI * r * h
}
console.log(squareCilinder(10,20));

// Task #SIdMd0hQ

function honey(array) {
    for (const item of array) {
        console.log(item);
    }
}
honey([3, `b18`, 23]);

// Task #59g0IsA

function Paragraph(text) {
    document.write(`<p>${text}</p>`);
}
Paragraph('Shma Israel');

// Task #hOL6126

function Mission(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}
Mission('Okten is cool');

// Task #0Kxco1edSN

function Mission(text, Quantity) {
    document.write('<ul>');
    for (let i = 0; i < Quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
Mission('OktenSchool', 5);

// Task #gEFoxMMO

function Montana(arrayOf) {
    document.write('<ul>');
    for (const item of arrayOf) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
honey([`Ukraine`, 144, false]);

// Task #bovDJDTIjt

function Dnipro(users) {
    for (const user of users) {
document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
Dnipro([
    {id:1, name: `Vasya`, age:39},
    {id:2, name: `Olya`, age:18},
    {id:3, name: `Katya`, age:9},
    {id:4, name: `Mariia`, age:27},
]);

// Task #pghbnSB

function arrayMinimum(numbers) {
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    let number = numbers[i];
    if (number < min) {
        min = number
    }
}
return min;
}
console.log(arrayMinimum([63, 18, -11, 45, 113, -98]));

// Task #EKRNVPM

function sum(arr) {
    let masyv = 0;
    for (const item of arr) {
    masyv = masyv + item;
    }
    return masyv;
}
console.log(sum([1, 2, 10]));

// Task #kpsbSQCt2Lf

function swap(arr, x1, x2) {
    let temp = arr[x1];
    arr[x1] = arr[x2];
    arr[x2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// Task #mkGDenYnNjn

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currensy === exchangeCurrency) {
            chosenCurrency = item;
        }
    }

    let result = sumUAH/chosenCurrency.value
    return result;
}

console.log(exchange(10000,[{currency: 'USD', value: 25}, {currency: 'EUR', value:42}],'USD'));