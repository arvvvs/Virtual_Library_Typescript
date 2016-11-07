"use strict";
var library_1 = require("./library");
//create new library object 
var library = new library_1.Library();
//Creating items to add and test for the library
//helps break up code to be more manageable
var myPic = { name: 'christmas santa', year: 1997, photographer: 'me', type: 'Photo' };
var christmas_party = {
    name: 'Office Christmas Party', year: 2016,
    director: ['Josh Gordon', 'Will Speck'],
    actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'],
    movie_genre: "Comedy", length: library.length_setter_movies(1, 20), type: "Movie"
};
var ten_cloverfield = {
    name: '10 Cloverfield Lane', year: 2016,
    director: ['Dan Trachtenberg'],
    actors: ['Mary Elizabeth Winstead', 'John Goodman', 'John Gallagher Jr.'],
    movie_genre: "Horror", length: library.length_setter_movies(1, 46), type: "Movie"
};
var slay = {
    name: "Formation", year: 2016, artist: ["Beyonce"],
    song_genre: "Bounce",
    album: "Lemonade", length: library.length_setter_songs(3, 26),
    type: "Song"
};
var crazy_in_love = {
    name: "Crazy in Love", year: 2003, artist: ["Beyonce"],
    song_genre: "R&B",
    album: "Dangerously in Love", length: library.length_setter_songs(3, 56),
    type: "Song"
};
var doctor_strange = {
    name: "Doctor Strange", year: 2016,
    director: ["Scott Derrickson"], actors: ["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
    movie_genre: "Fantasy", length: library.length_setter_movies(1, 55), type: "Movie"
};
var war_games = {
    name: "War Games", year: 1983, director: ["John Badham"], actors: ["Mathew Broderick", "Ally Sheedy", "John Wood"],
    movie_genre: "Science Fiction", length: library.length_setter_movies(1, 54), type: "Movie"
};
var afghan_girl = { name: "Afghan Girl", year: 1984, photographer: "Steve McCurry", type: "Photograph" };
var migrant_mother = {
    name: "Migrant Mother",
    year: 1936, photographer: "Dorothea Lange", type: "Photo"
};
var stayin_alive = {
    name: "Stayin' Alive", year: 1977, artist: ["Bee Gees"], song_genre: "Disco",
    album: "Saturday Night Fever", length: library.length_setter_songs(4, 45), type: "Song"
};
var lego_batman = {
    name: "The Lego Batman Movie",
    year: 2017, director: ["Chris McKay"],
    actors: ["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
    movie_genre: "Animation", length: library.length_setter_movies(), type: "Movie"
};
var licoln_photo = {
    name: "Gettysburg Potrait", year: 1863,
    photographer: "Alexander Gardner", type: "Photo"
};
var hail_caesar = {
    name: "Hail, Caesar!",
    year: 2015, director: ["Joel Coen", "Ethan Coen"],
    actors: ["Josh Brolin", "George Clooney", "Alden Ehrenreich", "Ralph Fiennes",
        "Jonah Hill", "Scarlett Johansson", "Tilda Swilton", "Channing Tatum"],
    movie_genre: "Comedy", length: library.length_setter_movies(1, 46),
    type: "Movie"
};
var moonlight_sonata = {
    name: "Moonlight Sonata", year: 1801, artist: ["Beethoven"],
    song_genre: "Classical", album: "Piano Sonatas",
    length: library.length_setter_songs(15, 1), type: "Song"
};
var vivaldi_summer = {
    name: "Summer", year: 1723, artist: ["Vivaldi"], song_genre: "Classical",
    album: "The Four Seasons",
    length: library.length_setter_songs(40, 42),
    type: "Song"
};
var winter_horseman = { name: "Winter Horseman", year: 2016, photographer: "Anthony Lau", type: "Photo" };
var test_name_as_number = { name: "2016", year: 2015, photographer: "test", type: "Photo" };
var whiskey_tango_foxtrot = { name: "Whiskey Tango Foxtrot", year: 2016, director: ["Glenn Ficarra", "John Requa"], actors: ["Tina Fey", "Margot Robbie", "Martin Freeman", "Alfred Molina", "Christopher Abbot", "Billy Bob Thorton"], movie_genre: "Comedy", length: library.length_setter_movies(1, 52), type: "Movie" };
var stutterer = { name: "Stutter", year: 2015, director: ["Benjamin Cleary"], actors: ["Matthew Needham", "Eric Richard"], movie_genre: "Short Film", length: library.length_setter_movies(0, 12), type: "Movie" };
//adds test item to library
library.addSong(moonlight_sonata);
library.addSong(slay);
library.addSong(crazy_in_love);
library.addSong(stayin_alive);
library.addSong(vivaldi_summer);
library.addMovie(christmas_party);
library.addMovie(doctor_strange);
library.addMovie(war_games);
library.addMovie(ten_cloverfield);
library.addMovie(lego_batman);
library.addMovie(hail_caesar);
library.addMovie(whiskey_tango_foxtrot);
library.addMovie(stutterer);
library.addPhoto(myPic);
library.addPhoto(afghan_girl);
library.addPhoto(licoln_photo);
library.addPhoto(migrant_mother);
library.addPhoto(winter_horseman);
library.addPhoto(test_name_as_number);
// console.log(library.filterBy("","2016"));
// console.log(library.filterBy("", library.length_setter_movies(0,12)));
console.log(library.filterBy('', "bey", "song"));
// console.log(library.library_movie); 
//# sourceMappingURL=test.js.map