// Task #dFeorS3m7u

let s1 = 'hello world';
console.log (s1.length);
let s2 = 'lorem ipsum';
console.log (s2.length);
let s3 = 'javascript is cool';
console.log (s3.length);

// Task #8lld9HMxXWB

let a = 'hello world';
const a4 = a.toUpperCase();
console.log(a4);
let b = 'lorem ipsum';
const b5 = b.toUpperCase();
console.log(b5);
let c = 'javascript is cool';
const c6 = c.toUpperCase();
console.log(c6);

// Task #ClDsAm7xba7

let d = 'HELLO WORLD';
const d1 = d.toLowerCase();
console.log(d);
console.log(d1);
let e = 'LOREM IPSUM';
const e1 = e.toLowerCase();
console.log(e1);
let f = 'JAVASCRIPT IS COOL';
const f1 = f.toLowerCase();
console.log(f1);

// Task #0b89BkYZwu

let str = ' dirty string   '
const g = str.trim();
console.log(g);
console.log(g.length);
console.log(str.length);

// Task #bfoJuse4ZzP

function stringToarray(str1) {
    if (str1) {
        const split = str1.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'));
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// Task #Rbr5kEQ

const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strings = numbers.map(number => number + '');
console.log(strings);

// Task #5hqyKTfmc

function sortNums(nums, direction) {
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => a - b);
}

// // Task #yo06d74c1C

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Fronted', monthDuration: 4},
];
const map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index+1}));
console.log(map1);

// // Task  #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
    for (const suit of suits) {
        for (const value of values) {
            const card = {cardSuit: suit, value: value};
            if (suit === 'heart' || suit === 'diamond') {
                card.color = 'red';
            } else {
                card.color = 'black';
            }
            cards.push(card);
        }
}
console.log(cards);
    console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
    console.log(cards.filter(card => card.value === '6'));
    console.log(cards.filter(card => card.color === 'red'));
    console.log(cards.filter(card => card.Suit === 'diamond'));
    console.log(cards.filter(card => card.Suit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8')));

// Task #EP5I1UUzAX

const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
    return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);

// Task #4LJn7zBx

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));
