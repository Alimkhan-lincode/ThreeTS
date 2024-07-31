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
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
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
