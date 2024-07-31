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
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
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

// Создайте перечисление Colors, содержащее несколько цветов (красный, синий, зеленый и т.д.). Напишите функцию, которая принимает в качестве аргумента цвет и выводит в консоль сообщение вида "Выбран [цвет] цвет".

enum Colors {
  Red = 1,
  blue = 2,
  green = 3,
  black = 4,
  white = 5
}

function colorVib(color: Colors): void {
  switch(color) {
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

colorVib(Colors.black)
colorVib(Colors.white)

// Создайте перечисление Planets, содержащее названия планет (Меркурий, Венера, Земля и т.д.). Напишите функцию, которая принимает в качестве аргумента название планеты и возвращает порядковый номер этой планеты в солнечной системе.

enum Planets {
  Mercury = 1,
  Venus = 2,
  Earth = 3,
  Mars = 4,
  Jupiter = 5,
  Saturn = 6,
  Uranus = 7,
  Neptune = 8
}

function planetColv(planet: Planets): number {
  return planet;
}

console.log(planetColv(Planets.Jupiter)); 
console.log(planetColv(Planets.Uranus)); 

// Создайте перечисление Fruits, содержащее названия фруктов (яблоко, груша, апельсин и т.д.). Напишите функцию, которая принимает в качестве аргумента фрукт и проверяет, входит ли он в перечисление Fruits. Если фрукт есть в перечислении, выведите в консоль сообщение "Этот фрукт вкусный!". Если фрукта нет в перечислении, выведите сообщение "Неизвестный фрукт!".

enum Fruits {
  Apple,
  Pear,
  Orange,
  Banana,
  Strawberry,
  Grape
}

function checkFruit(fruit: string): void {
  if (Object.values(Fruits).includes(fruit as Fruits)) {
    console.log("Этот фрукт вкусный!");
  } else {
    console.log("Неизвестный фрукт!");
  }
}

checkFruit("Apple");
checkFruit("Grape"); 
checkFruit("Pineapple"); 
// Я не догадался использовать "If,else", и не смог решить.Так что списал у GPT