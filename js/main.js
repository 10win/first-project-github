const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



for (let i = 0; i < numberOfFilms; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("Оцените фильм", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }

}

if (personalMoviesDB.count < 10){
    console.log("Просмотрено мало фильмов");
} else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log("Просмотрено достаточно фильмов");
} else if (personalMoviesDB.count > 30) {
    console.log("Просмотрено много фильмов");
} else {
    console.log("Ошибка");
}

console.log(personalMoviesDB)