const goods = [
    {
        id: 1,
        name: 't-shirt',
        description: 'sport',
        sizes: ['xs', 's', 'm', 'l'],
        price: 150,
        available: true,
    },
    {
        id: 2,
        name: 'socks',
        description: 'sport',
        sizes: [42, 43,],
        price: 50,
        available: true,
    },
    {
        id: 3,
        name: 'shoes',
        description: 'chelsea',
        sizes: [41, 44, 45,],
        price: 550,
        available: true,
    },
    {
        id: 4,
        name: 'pants',
        description: 'boxer',
        sizes: ['m', 'xl', 'xxl',],
        price: 100,
        available: false,
    },
    {
        id: 5,
        name: 'belt',
        description: 'crocodile skin',
        sizes: ['one size',],
        price: 777,
        available: true,
    },
];

const basket = [
    {
        good: goods[0],
        amount: 3,
    },
    {
        good: goods[2],
        amount: 1,
    }
];

function delFullBasket(data) {
    data.length = 0;
};

function addBasket(product, quantity) {
    if (goods[product].available == true) {
        basket.push({good:goods[product], amount:quantity})
        console.log('Товар добавлен в корзину')
    } else {
        console.log('Товар закончился')
    }
};

function delFromBasket(productNumber) {
    basket.splice(productNumber,1);
};

function sumBasket() {
    let totalAmount = 0
    let totalSumm = 0
    for (let i =0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
        totalSumm += basket[i].amount * basket[i].good.price;
    }
    return {
        totalAmount, totalSumm
    }
};

delFullBasket(basket);
console.log(basket.length);

addBasket(4,5);
addBasket(1,2);
addBasket(2,1);
addBasket(3,3);
console.log(basket);
console.log(basket.length);

delFromBasket(1);
console.log(basket);
console.log(basket.length);

console.log(sumBasket());
