//library is an array that will store
//javascript objects containing the media
var library = {song:[], movie:[], photo:[]};
/*
*Interfaces are a feature form typescript.  
*They allow me to consitently shape how an objects
*containing a song/movie/photo will be cataloged
*It doesn't transpile to javascript
*/
interface librarySong {
    name: String;
    year: Number;
    artist: Array<String>;
    "Song_Genre": String;
    album: String;
    length: String;
    type: String;
}
interface libraryMovie {
    name: String;
    year: Number;
    director: Array<String>;
    actors: Array<String>;
    movie_genre: String;
    length: String;
    type: String;
}
interface libraryPhoto {
    name: String;
    year: Number;
    photographer: String;
    type: String;
}
function addMovie(photo: libraryMovie){
    library.movie.push(photo);
    
}

function addPhoto(movie: libraryPhoto){
    library.photo.push(movie);
}
function addSong(song: librarySong){
    library.song.push(song);
}


//function created to maintain a consistent
//looking length
let length_setter_movies = (hour:number=-1, min:number=-1) =>{
    if((hour<0 || min<0) || (hour===0 && min===0)){
        return "N/A";
    }
    if(min<10){
        let zero_minutes = "0"+min;
        return hour+"h"+" "+zero_minutes+"m";
    }
    return hour+"h"+" "+min+"m";
}
let length_setter_songs = (minutes:number=-1, seconds:number=-1) =>{
    if((minutes<0 || seconds<0) || (minutes===0 && seconds===0)){
        return "N/A";
    }
    if(seconds<10){
        let new_seconds = "0"+seconds;
        return minutes+":"+new_seconds;
    }
    return minutes+":"+seconds;
}
let myPic = {name:'christmas santa',year: 1997, photographer: 'me', type:'Photo'};

 let christmas_party = {name:'Office Christmas Party',year: 2016, 
 director: ['Josh Gordon', 'Will Speck'], 
 actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'], 
 movie_genre: "Comedy",length: length_setter_movies(1, 20), type: "Movie"};
let slay = {name:"Formation", year: 2016, artist: ["Beyonce"], 
"Song_Genre":"Bounce", 
album:"Lemonade",length:length_setter_songs(3,26), 
type:"Song"};
let doctor_strange = {name: "Doctor Strange", year: 2016, 
director: ["Scott Derrickson"], actors:["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
movie_genre:"Fantasy", length:length_setter_movies(1, 55), type:"Movie"};
let war_games = {name:"War Games", year:1983, director:["John Badham"], actors:["Mathew Broderick", "Ally Sheedy", "John Wood"],
movie_genre: "Science Fiction", length:length_setter_movies(1,54), type:"Movie"};
let afghan_girl = {name:"Afghan Girl", year:1984, photographer:"Steve McCurry", type:"Photograph"}
let migrant_mother = {name:"Migrant Mother",
year:1936, photographer:"Dorothea Lange", type:"Photo"}
let stayin_alive = {name:`Stayin' Alive`, year:1977, artist:["Bee Gees"], "Song_Genre":"Disco",
 album:"Saturday Night Fever", length:length_setter_songs(4,45), type:"Song"};
let lego_batman = {name:"The Lego Batman Movie", 
year: 2017, director:["Chris McKay"], 
actors:["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
movie_genre:"Animation", length: length_setter_movies(), type:"Movie"};
let licoln_photo = {name:"Gettysburg Potrait", year:1863, 
photographer:"Alexander Gardner", type:"Photo"};
let hail_caesar = {name:"Hail, Caesar!", 
year: 2015, director:["Joel Coen", "Ethan Coen"],
actors: ["Josh Brolin", "George Clooney", "Alden Ehrenreich", "Ralph Fiennes",
"Jonah Hill", "Scarlett Johansson", "Tilda Swilton", "Channing Tatum"],
movie_genre:"Comedy", length:length_setter_movies(1, 46), 
type: "Movie"};
let moonlight_sonata = {name:"Moonlight Sonata", year:1801, artist:["Beethoven"], 
"Song_Genre":"Classical", album:"Piano Sonatas",
length:length_setter_songs(15,1), type:"Song"};
let vivaldi_summer = {name:"Summer", year:1723, artist:["Vivaldi"], "Song_Genre":"Classical",
album:"The Four Seasons", 
length:length_setter_songs(40,42),
type:"Song"};
addSong(moonlight_sonata);
addSong(slay);
addSong(stayin_alive);
addSong(vivaldi_summer);
addMovie(christmas_party);
addMovie(doctor_strange);
addMovie(war_games);
addMovie(lego_batman);
addMovie(hail_caesar);
addPhoto(myPic);
addPhoto(afghan_girl);
addPhoto(licoln_photo);
addPhoto(migrant_mother);

console.log(JSON.stringify(library, null, 4));

