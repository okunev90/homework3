/*-----------------------------Exampe 1.1---------------------------*/
/*Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};*/

const rectangle = {
    width: 100,
    height: 166,
    getSquare: function () {
        return this.width * this.height
    }
};

console.log(rectangle.getSquare());

/*-----------------------------Exampe 1.2---------------------------*/
/*Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
    const price = {
        price: 10,
        discount: '15%',
        ... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5*/

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - ((this.price * parseInt(this.discount)) / 100);
    }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

/*-----------------------------Exampe 1.3---------------------------*/
/*Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
    object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;*/

const myHeight = {
    height: 10,
    newHeight: function () {
        this.height += 1;
        return this;
    }
};

myHeight.newHeight();
console.log(myHeight.height);

/*-----------------------------Exampe 1.4---------------------------*/
/*Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
    const numerator = {
        value: 1,
        double: function () {...},
        plusOne: function () {...},
        minusOne: function () {...},
    }
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3*/

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this
    },
    plusOne: function () {
        this.value += 1;
        return this
    },
    minusOne: function () {
        this.value -= 1;
        return this
    },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

/*-----------------------------Exampe 1.5---------------------------*/
/*Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов)*/

const product = {
    price: 130,
    quantity: 32,
    totalPrice: function () {
        return this.price * this.quantity;
    }
};

console.log(product.totalPrice());

/*-----------------------------Exampe 1.6---------------------------*/
/*Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.*/

const detail = {
    price: 100,
    quantity: 3,
};

console.log(product.totalPrice.call(detail));

/*-----------------------------Exampe 1.7---------------------------*/
/*Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes*/

let sizes = {
    width: 5,
    height: 10
};

const getSquare = function () {
    return this.width * this.height
};

console.log(getSquare.call(sizes));


/*-----------------------------Exampe 1.8---------------------------*/
/*let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.*/

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight;
getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());

/*-----------------------------Exampe 2.1---------------------------*/
/*На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]*/

const parity = () => {
    const numArray = [1, 2, 3, 5, 8, 9, 10];
    return numArray.map(item => {
            const parityArray = {digit: item, odd: item % 2 === 0};
            return parityArray;
        }
    );

    /* const parityArray = [];
     numArray.forEach((item) => {
         parityArray.push({digit: item, odd: item % 2 === 0})
     });
     return parityArray;
     */

};

console.log(parity());

/*-----------------------------Exampe 2.2---------------------------*/
/*Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.*/

const arrNumber = [12, 4, 50, 1, 0, 18, 40];
const comparisonNum = () => {
    if (arrNumber.some(x => x === 41)) return false;
};

console.log(comparisonNum());

/*-----------------------------Exampe 2.3---------------------------*/
/*Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true*/

const arrString = ['yes', 'hello', 'no', 'easycode', 'what'];
const comparisonStr = () => {
    return arrString.some(x => x.length > 3);
};

console.log(comparisonStr());

/*-----------------------------Exampe 2.4---------------------------*/
/*Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки*/

const params = [
    {char: "a", index: 12}, {char: "w", index: 8},
    {char: "Y", index: 10}, {char: "p", index: 3},
    {char: "p", index: 2}, {char: "N", index: 6},
    {char: " ", index: 5}, {char: "y", index: 4},
    {char: "r", index: 13}, {char: "H", index: 0},
    {char: "e", index: 11}, {char: "a", index: 1},
    {char: " ", index: 9}, {char: "!", index: 14},
    {char: "e", index: 7}
];

const sortIndex = () => {
    return params.sort((a, b) => a.index - b.index);
};

console.log(sortIndex());
/*-----------------------------Exampe 2.5---------------------------*/
/*Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]*/

const superArr = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
];

const sortArr = () => {
    return superArr.sort((a, b) => a.length - b.length);
};

console.log(sortArr());

/*-----------------------------Exampe 2.6---------------------------*/
/*Есть массив объектов:
[
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).*/

const laptop = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}}
];

const sortLaptop = () => {
    return laptop.sort((a, b) => a.info.cores - b.info.cores);
};

console.log(sortLaptop());

/*-----------------------------Exampe 2.7---------------------------*/
/*Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]*/


let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

const filterCollection = (products, b, c) => {
    return products
        .filter(x => x.price >= b && x.price <= c)
        .sort((a, b) => a.price - b.price);
};

console.log(filterCollection(products, 15, 30));
