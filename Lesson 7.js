// Task #XjJuucOMR0
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user = new User(346324528, 'Yevheniia', 'Brodsky', 'brodskayajane@gmail.com', '+972532741833');
console.log(user);
let users = [
    new User(1, 'Aleksandr', 'Brodsky', 'Alex@gmail.com', '+972536546456'),
    new User(2, 'Raisa', 'Brodsky', 'Raisa@gmail.com', '+972564654654'),
    new User(3, 'Andrew', 'Borodich', 'AndrewB@gmail.com', '+97250654641654'),
    new User(3, 'Kseniia', 'Sirovets', 'Sirovets@gmail.com', '+972165165651'),
    new User(3, 'Alina', 'Shtepa', 'Shtepa@gmail.com', '+972505651651'),
    new User(3, 'Oleg', 'Brodsky', 'OlegB@gmail.com', '+97250159514'),
    new User(3, 'Natali', 'Brodsky', 'NataliB@gmail.com', '+9725051498498'),
    new User(3, 'Julia', 'Fedorchenko', 'FiJuliya@gmail.com', '+972506119919'),
    new User(3, 'Barbara', 'Abitbol', 'Barbie@gmail.com', '+972531516511'),
    new User(3, 'Karen', 'Teperman', 'TepermanK@gmail.com', '+972481959199')
]
console.log(users);

// Task #2ikXsE2WiKZ

const filterFunction = (user)=> user.id % 2 === 0;
const filterUsers = users.filter(filterFunction);
console.log(filterUsers);

// Task #pOeHKct

console.log(users.sort((user1,user2) => user.id - users.id));

// Task #nkMXISv

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
const client = new Client(1, 'Aleksandr', 'Brodsky', 'Alex@gmail.com', '+972536546456', 'TV');
let clients = [
    new Client(1, 'Aleksandr', 'Brodsky', 'Alex@gmail.com', '+972536546456', 'TV', 'Fridge', 'Umbrella'),
    new Client(2, 'Raisa', 'Brodsky', 'Raisa@gmail.com', '+972564654654', 'Phone'),
    new Client(3, 'Andrew', 'Borodich', 'AndrewB@gmail.com', '+97250654641654', 'Conditioner', 'Vacuum'),
    new Client(4, 'Kseniia', 'Sirovets', 'Sirovets@gmail.com', '+972165165651', 'VideoRegistrator', 'Hair dryier'),
    new Client(5, 'Alina', 'Shtepa', 'Shtepa@gmail.com', '+972505651651', 'MicroWave', 'Vacuum cleaner', 'Blender'),
    new Client(6, 'Oleg', 'Brodsky', 'OlegB@gmail.com', '+97250159514', 'Fridge'),
    new Client(7, 'Natali', 'Brodsky', 'NataliB@gmail.com', '+9725051498498', 'Washing Machine', 'Mixer')
];
console.log(clients);

// Task #8abtVjRv

function Customer(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let customers = [
    new Customer(1, 'Aleksandr', 'Brodsky', 'Alex@gmail.com', '+972536546456', ['TV', 'Fridge', 'Umbrella']),
    new Customer(2, 'Raisa', 'Brodsky', 'Raisa@gmail.com', '+972564654654', ['Phone']),
    new Customer(3, 'Andrew', 'Borodich', 'AndrewB@gmail.com', '+97250654641654', ['Conditioner', 'Vacuum']),
    new Customer(4, 'Kseniia', 'Sirovets', 'Sirovets@gmail.com', '+972165165651', ['VideoRegistrator', 'Hair dryier']),
    new Customer(5, 'Alina', 'Shtepa', 'Shtepa@gmail.com', '+972505651651', ['MicroWave', 'Vacuum cleaner', 'Blender']),
    new Customer(6, 'Oleg', 'Brodsky', 'OlegB@gmail.com', '+97250159514', ['Fridge']),
    new Customer(7, 'Natali', 'Brodsky', 'NataliB@gmail.com', '+9725051498498', ['Washing Machine', 'Mixer'])
];
const sort = customers.sort((a, b) => a.order.lenght - b.order.lenght);
console.log(sort);

// Task #vV9a6584I5

function Car(mode, producer, year, maxSpeed, engineVolume) {
    this.mode = mode
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear) {
        if (newYear > 1815) this.year = newYear;
    };
    this.addDriver = function (driverObject) {
        if (driverObject) this.driver = driverObject
    };
    const car = new Car('kjkj', 'dtds', 651, 489, 8);
    console.log(car);
    car.drive();
    car.info();
    car.increaseMaxSpeed(100);
    car.changeYear(2000);
    car.addDriver({});
    console.log(car);
}

// Task #5kla3yMpgp

class Auto {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear = function (year) {
        if (year > 1815) this.year = year;
    };
    addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}
    const Auto = new Auto('kjkj', 'dtds', 651, 489, 8);
    console.log(Auto);
    car.drive();
    car.info();
    car.increaseMaxSpeed(100);
    car.changeYear(2000);
    car.addDriver({});
    console.log(Auto);

    // Task #zg6Fifnqig

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize;
    }
}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.sge = age;
        this.slipper = slipper;
    }
}
const cinderellsas = [
    new Cinderella('ggg1', 123, 33),
    new Cinderella('ggg1', 123, 34),
    new Cinderella('ggg1', 123, 35),
    new Cinderella('ggg1', 123, 36),
    new Cinderella('ggg1', 123, 37),
    new Cinderella('ggg1', 123, 38),
    new Cinderella('ggg1', 123, 39),
];
const prince = new Prince('oijoj', 1651, 36);
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}
const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;