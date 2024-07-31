// Создайте перечисление (enum) DaysOfWeek, содержащее названия дней недели (понедельник, вторник и т.д.). Выведите все значения этого перечисления в консоль.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek.Monday); // 0
console.log(DaysOfWeek.Tuesday); // 1
console.log(DaysOfWeek.Wednesday); // 2
console.log(DaysOfWeek.Thursday); // 3
console.log(DaysOfWeek.Friday); // 4
console.log(DaysOfWeek.Saturday); // 5
console.log(DaysOfWeek.Sunday); // 6
// Создайте перечисление Months, содержащее названия месяцев (январь, февраль и т.д.). Напишите функцию, которая принимает в качестве аргумента число от 1 до 12 и возвращает название соответствующего месяца в консоль.
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
function numberMonths(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(Months.January);
            break;
        case 2:
            console.log(Months.February);
            break;
        case 3:
            console.log(Months.March);
            break;
        case 4:
            console.log(Months.April);
            break;
        case 5:
            console.log(Months.May);
            break;
        case 6:
            console.log(Months.June);
            break;
        case 7:
            console.log(Months.July);
            break;
        case 8:
            console.log(Months.August);
            break;
        case 9:
            console.log(Months.September);
            break;
        case 10:
            console.log(Months.October);
            break;
        case 11:
            console.log(Months.November);
            break;
        case 12:
            console.log(Months.December);
    }
}
numberMonths(7);
numberMonths(10);
// Создайте перечисление Colors, содержащее несколько цветов (красный, синий, зеленый и т.д.). Напишите функцию, которая принимает в качестве аргумента цвет и выводит в консоль сообщение вида "Выбран [цвет] цвет".
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["blue"] = 2] = "blue";
    Colors[Colors["green"] = 3] = "green";
    Colors[Colors["black"] = 4] = "black";
    Colors[Colors["white"] = 5] = "white";
})(Colors || (Colors = {}));
function colorVib(color) {
    switch (color) {
        case Colors.Red:
            console.log("Выбран красный цвет");
            break;
        case Colors.blue:
            console.log("Выбран синий цвет");
            break;
        case Colors.green:
            console.log("Выбран зеленый цвет");
            break;
        case Colors.black:
            console.log("Выбран черный цвет");
            break;
        case Colors.white:
            console.log("Выбран белый цвет");
    }
}
colorVib(Colors.black);
colorVib(Colors.white);
// Создайте перечисление Planets, содержащее названия планет (Меркурий, Венера, Земля и т.д.). Напишите функцию, которая принимает в качестве аргумента название планеты и возвращает порядковый номер этой планеты в солнечной системе.
var Planets;
(function (Planets) {
    Planets[Planets["Mercury"] = 1] = "Mercury";
    Planets[Planets["Venus"] = 2] = "Venus";
    Planets[Planets["Earth"] = 3] = "Earth";
    Planets[Planets["Mars"] = 4] = "Mars";
    Planets[Planets["Jupiter"] = 5] = "Jupiter";
    Planets[Planets["Saturn"] = 6] = "Saturn";
    Planets[Planets["Uranus"] = 7] = "Uranus";
    Planets[Planets["Neptune"] = 8] = "Neptune";
})(Planets || (Planets = {}));
function planetColv(planet) {
    return planet;
}
console.log(planetColv(Planets.Jupiter));
console.log(planetColv(Planets.Uranus));
// Создайте перечисление Fruits, содержащее названия фруктов (яблоко, груша, апельсин и т.д.). Напишите функцию, которая принимает в качестве аргумента фрукт и проверяет, входит ли он в перечисление Fruits. Если фрукт есть в перечислении, выведите в консоль сообщение "Этот фрукт вкусный!". Если фрукта нет в перечислении, выведите сообщение "Неизвестный фрукт!".
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Pear"] = 1] = "Pear";
    Fruits[Fruits["Orange"] = 2] = "Orange";
    Fruits[Fruits["Banana"] = 3] = "Banana";
    Fruits[Fruits["Strawberry"] = 4] = "Strawberry";
    Fruits[Fruits["Grape"] = 5] = "Grape";
})(Fruits || (Fruits = {}));
function checkFruit(fruit) {
    if (Object.values(Fruits).includes(fruit)) {
        console.log("Этот фрукт вкусный!");
    }
    else {
        console.log("Неизвестный фрукт!");
    }
}
checkFruit("Apple");
checkFruit("Grape");
checkFruit("Pineapple");
// Я не догадался использовать "If,else", и не смог решить.Так что списал у GPT
