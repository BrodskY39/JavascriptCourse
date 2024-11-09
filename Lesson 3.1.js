for (let i = 0; i < 10; i++) {
    document.write('<div>user info</div>');
}

// Task #TYj7ncx

for (let i = 0; i < 10; i++) {
document.write('<div> Who knows' + i + '</div>');
}

// Task #uzkt71dp

let i = 0;
while (i < 20) {
    document.write('<h1>' + 'London is the capital of Great Britan' + '</h1>');
    i++;
}

// Task #OeT7t3uUMFi

let j = 0;
while (j < 20) {
    document.write(`<h1>Life is good ${j} </h1>`);
    j++;
}

// Task #vLSZKMlO

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (const item of listOfItems) {
    document.write(` <li>${`html`}</li> `);
    document.write(` <li>${'css'}</li> `);
    document.write(` <li>${'javascript'}</li> `);
    document.write(` <li>${'mysql'}</li> `);
    document.write(` <li>${'mongodb'}</li> `);
    document.write(` <li>${'react'}</li> `);
    document.write(` <li>${'angular'}</li> `);
    document.write(` <li>${'node.js'}</li> `);
}
document.write(`</ul>`);

// Task #Hdjws7E

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://minio.clevermart.kz/food/images/2022/12/27/0609b4a5-a881-4183-a115-a2394daa0d99/M_764460229820_1.png'
    },
];

for(const product of products) {

    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
    </div>
    `)
}

// Task #4WrHwFTEop0

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}
// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }