"use strict"

let numberOfFilms;
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms(){
    for (let i = 0; i < numberOfFilms; i++){
        const a = prompt("Введите название фильма", ""),
              b = prompt("Оцените фильм", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
    }
}

function detectPersonalLevel(){
    if (personalMoviesDB.count < 10){
        console.log("Просмотрено мало фильмов");
    } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
        console.log("Просмотрено достаточно фильмов");
    } else if (personalMoviesDB.count > 30) {
        console.log("Просмотрено много фильмов");
    } else {
        console.log("Ошибка");
    }
}

function writeYourGeneres(){
    for(let i = 1; i <= 3; i++){
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

function showMyDatabase(hidden){
    if (!hidden){
        console.log(personalMoviesDB)
    }
}

start();
writeYourGeneres()
rememberMyFilms();
detectPersonalLevel();
showMyDatabase(personalMoviesDB.privat);