"use strict"

let numberOfFilms;
const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)){
            personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < numberOfFilms; i++) {
            const a = prompt("Введите название фильма", "").trim(),
                b = prompt("Оцените фильм", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if (personalMoviesDB.count < 10){
            console.log("Просмотрено мало фильмов");
        } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
            console.log("Просмотрено достаточно фильмов");
        } else if (personalMoviesDB.count > 30) {
            console.log("Просмотрено много фильмов");
        } else {
            console.log("Ошибка");
        }
    },
    writeYourGeneres: function (){
        for(let i = 1; i <= 3; i++){
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genres === "" || genres == null){
                    i--;
                    console.log("Вы ввели некорректные данные");
                }  else {
                    personalMoviesDB.genres[i - 1] = genres;
                }
            }

        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    },
    showMyDatabase: function (hidden){
        if (!hidden){
            console.log(personalMoviesDB)
        }
    },
    toggleVisibleMyDB: function () {
      if (personalMoviesDB.privat){
          personalMoviesDB.privat = false;
      }  else {
          personalMoviesDB.privat = true;
      }
    },
};

