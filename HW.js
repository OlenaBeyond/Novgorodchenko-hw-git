
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


let hamburgers1 = 3;
let fries1 = 1;
if(hamburgers1 >=4 && fries1){
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
};
 

2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

    let num = 1001;

    if(num >= 1000 && num <= 1900){
        console.log('accepted')
     } else {
            console.log('rejected')
        };



3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

    let num = 900;

    if(num >= 1000 || num <= 1900){
        console.log('not in a range ')
    } else {
        console.log('in a range ')
    };

    let num = 2000;

    if(!(num <= 1000 && num <=1900)){
        console.log('match')
    } else {
        console.log('not match')
    }




4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

    
    let season = 1;

    if(season == 1){
        console.log('winter')
    }else if(season == 2){
        console.log('spring')
    }else if(season == 3){
        console.log('summer')
    }else if(season == 4){
        console.log('autumn')
    } else{
        console.log('false')
    }

    
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

    let a = 3;
    let b = 2;
    let c = 1
let avg

if (a > b) {
  if (a > c) {
  
    if (b > c)
      avg = b
    else
      avg = c
  }
  else 
    avg = a
}
else {
  
  if (b > c) {
    if (a > c)
      avg = a
    else
      avg = c
  }
  else
    avg = b
}

console.log("avg(" + a + ", " + b + ", " + c + ") = " + avg)

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

    let dayoftheweek = '4';

    switch(dayoftheweek){
        case '1':
            console.log('Monday');
            break;
            case '2':
            console.log('Tuesday');
            break;
            case '3':
            console.log('Wednesday');
            break;
            case '4':
            console.log('Thursday');
            break;
            case '5':
            console.log('Friday');
            break;
            case '6':
            console.log('Saturday');
            break;
            case '7':
            console.log('Sunday');
    }

7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

    let a = 4;
    let b = 2;
    let sign = '/';
    

    switch (sign) {
	case '+': c = a + b; 
    break;
	case '-': c = a - b; 
    break;
	case '*': c = a * b;
    break;
	case '/': c = a / b ; 
    break;   
    };

    console.log(+ c)

8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

   const str = 'Alaska';
   const noVowels = str.replace(/[aeiou]/gi, '');
   console.log(noVowels); 

   
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
