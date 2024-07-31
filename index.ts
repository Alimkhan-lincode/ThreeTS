// Создайте перечисление (enum) DaysOfWeek, содержащее названия дней недели (понедельник, вторник и т.д.). Выведите все значения этого перечисления в консоль.

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(DaysOfWeek.Monday); // 0
console.log(DaysOfWeek.Tuesday); // 1
console.log(DaysOfWeek.Wednesday); // 2
console.log(DaysOfWeek.Thursday); // 3
console.log(DaysOfWeek.Friday); // 4
console.log(DaysOfWeek.Saturday); // 5
console.log(DaysOfWeek.Sunday); // 6

// Создайте перечисление Months, содержащее названия месяцев (январь, февраль и т.д.). Напишите функцию, которая принимает в качестве аргумента число от 1 до 12 и возвращает название соответствующего месяца в консоль.

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

function numberMonths(monthNumber: number): void {
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

