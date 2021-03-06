/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b; /* - используем квадратные скобки, чтобы избежать багов в некоторых браузерах */
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);



/* Задачи для самостоятельного решения: */

console.log( NaN || 2 || undefined ); /* - Ответ: 2, т.к. это первое значение true. */
 
console.log( NaN && 2 && undefined ); /* - Ответ: NaN, т.к. это первое ложное значение.NaN
Но если все правдивые, то возьмется последнее значение. */
 
console.log( 1 && 2 && 3 ); -/*  Ответ: 3. */
 
console.log( !1 && 2 || !3 ); /* - Ответ: false. */
 
console.log( 25 || null && !3 ); /* - Ответ: 25. */
 
console.log( NaN || null || !3 || undefined || 5); /* - Ответ: 5. */
 
console.log( NaN || null && !3 && undefined || 5); /* - Ответ: 5. */


 //          1.true     2.true
console.log( 5 === 5 && 3 > 1 || 5); /* - Ответ: true. Согласно таблице приоритетов. */


/* Задания на использование циклов и условий. */

/* 1. При помощи цикла выведеите числа от 5 до 10 в консоль. 5 и 10 включительно.
Цикл можно использовать любой. */

for (let i = 5; i <= 10; i++) {
    if (i === 11) {
        break;
    }

    console.log(i);
}

/* 2. При помощи цикла for выведите числа от 20 до 10 в консоль. 
В обратном порядке (20,19,18...). 
Когда цикл дойдет до числа 13 - остановить весь цикл. */

for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }

    console.log(i);
}

/* 3. При помощи цикла for  выведите четные числа от 2 до 10 включительно. */

for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}

/* Примечание: 'number % 2 === 0' проверка на четность, 
т.е. если число % на 2 и оно строго равно 0, то оно четное. */

/* 4. Перепишите цикл for на вариант с while. Результат должен остаться точно таким же. 
Не создавайте бесконечный цикл! Иначе браузер может зависнуть.
Цикл ниже, который нужно переписать: */
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

/* РЕШЕНИЕ: */

let i = 2;

while (i <= 15) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }     
}


/* 5. Заполните массив цифрами от 5 до 10 включительно.
Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0].
 */

const arr = [];

for (let i = 0; i <= 5; i++) {
    arr[i] = i + 5; 
} 
console.log(arr);


/* Продвинутые задания на использование циклов и условий. */

/* 1. Заполните новый массив (result) числами из старого (arr). 
Количество элементов в массиве можно получить как arr.length, 
а к элементам обращаемся все так же: arr[0], arr[1] и т.д. 
Должен получиться такой же массив.*/

const arr = [5, 6, 7, 8, 9, 10];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i]; 
} 
console.log(result);


/* 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
а если попадается строка - то к ней было добавлено - "done". 
Для определения типа данных используйте typeof();
Должно получиться: [10, 20, 'Shopping - done', 40, 'Homework - done']. */

const arr = [7, 10, 'Shopping', 12];

for (let i=0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        arr[i] = arr[i] * 2;
    }
    if (typeof arr[i] === 'string') {
        arr[i] = arr[i] + ' - done';
    }
}
console.log(arr);

/* 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: ['Homework - done', 20, 'Shopping - done', 10, 5]. */

const arr = [7, 10, 'Shopping', 12];
const result = [];
let b = 0;

for (let i=3; i >= 0; i--) {
    result[b] = arr[i];
    b++;
}
console.log(result);


/* ЗАДАЧА на формирование фигуры. */

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);