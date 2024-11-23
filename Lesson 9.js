// Task #8Nmt60ZT

const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
document.body.appendChild(div);
const cloneNode = div.cloneNode(true);
document.body.appendChild(cloneNode);
// document.body.append(div, cloneNode);

// Task #OPLI89c9G

let arr = ['Main','Products','About us','Contacts'];
const menu = document.createElement('ul');
menu.classList.add('menu');
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);

// Task #jeBqHV525U5

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}
// Task #Kx1xgoKy8

let courses_AndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of courses_AndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    const p = document.createElement('p');
    p.innerText = course.monthDuration;
    div.append(h2, p);
    document.body.appendChild(div);
}