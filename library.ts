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
    Name: String;
    Year: Number;
    Artist: Array<String>;
    Song_Genre: String;
    Album: String;
    Length: String;
    Type: String;
}
interface libraryMovie {
    Name: String;
    Year: Number;
    Director: Array<String>;
    Actors: Array<String>;
    Movie_Genre: String;
    Length: String;
    Type: String;
}
interface libraryPhoto {
    Name: String;
    Year: Number;
    By: String;
    Type: String;
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

var dateSetter = (date) => {
    let dateObject = new Date; 
    dateObject.setFullYear(date); 
    return dateObject.getFullYear();
};
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
let date1 = dateSetter(1997);
let myPic = {Name:'christmas santa',Year: dateSetter(1997), By: 'me', Type:'Photo'};

 let christmas_party = {Name:'Christmas',Year: dateSetter(2016), 
 Director: ['Josh Gordon', 'Will Speck'], 
 Actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'], 
 Movie_Genre: "Comedy",Length: length_setter_movies(1, 20), Type: "Movie"};
let slay = {Name:"Formation", Year: 2016, Artist: ["Beyonce"], 
Song_Genre:"Bounce", 
Album:"Lemonade",Length:length_setter_songs(3,26), 
Type:"Song"};
let doctor_strange = {Name: "Doctor Strange", Year: 2016, 
Director: ["Scott Derrickson"], Actors:["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
Movie_Genre:"Fantasy", Length:length_setter_movies(1, 55), Type:"Movie"};
let war_games = {Name:"War Games", Year:1983, Director:["John Badham"], Actors:["Mathew Broderick", "Ally Sheedy", "John Wood"],
Movie_Genre: "Science Fiction", Length:length_setter_movies(1,54), Type:"Movie"};
let afghan_girl = {Name:"Afghan Girl", Year:1984, By:"Steve McCurry", Type:"Photograph"}
let migrant_mother = {Name:"Migrant Mother",
Year:1936, By:"Dorothea Lange", Type:"Photo"}
let stayin_alive = {Name:`Stayin' Alive`, Year:1977, Artist:["Bee Gees"], Song_Genre:"Disco",
 Album:"Saturday Night Fever", Length:length_setter_songs(4,45), Type:"Song"};
let lego_batman = {Name:"The Lego Batman Movie", 
Year: 2017, Director:["Chris McKay"], 
Actors:["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
Movie_Genre:"Animation", Length: length_setter_movies(), Type:"Movie"};
let licoln_photo = {Name:"Gettysburg Potrait", Year:1863, 
By:"Alexander Gardner", Type:"Photo"};
let hail_caesar = {Name:"Hail, Caesar!", 
Year: 2015, Director:["Joel Coen", "Ethan Coen"],
Actors: ["Josh Brolin", "George Clooney", "Alden Ehrenreich", "Ralph Fiennes",
"Jonah Hill", "Scarlett Johansson", "Tilda Swilton", "Channing Tatum"],
Movie_Genre:"Comedy", Length:length_setter_movies(1, 46), 
Type: "Movie"};
let moonlight_sonata = {Name:"Moonlight Sonata", Year:1801, Artist:["Beethoven"], 
Song_Genre:"Classical", Album:"Piano Sonatas",
Length:length_setter_songs(15,1), Type:"Song"};
let vivaldi_summer = {Name:"Summer", Year:1723, Artist:["Vivaldi"], Song_Genre:"Classical",
Album:"The Four Seasons", 
Length:length_setter_songs(40,42),
Type:"Song"};
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

console.log(library);


