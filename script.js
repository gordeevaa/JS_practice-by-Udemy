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

