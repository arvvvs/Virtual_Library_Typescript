//library is an array that will store
//javascript objects containing the media
var library = { song: [], movie: [], photo: [] };
function addMovie(photo) {
    library.movie.push(photo);
}
function addPhoto(movie) {
    library.photo.push(movie);
}
function addSong(song) {
    library.song.push(song);
}
var dateSetter = function (date) {
    var dateObject = new Date;
    dateObject.setFullYear(date);
    return dateObject.getFullYear();
};
//function created to maintain a consistent
//looking length
var length_setter_movies = function (hour, min) {
    if (hour === void 0) { hour = -1; }
    if (min === void 0) { min = -1; }
    if ((hour < 0 || min < 0) || (hour === 0 && min === 0)) {
        return "N/A";
    }
    if (min < 10) {
        var zero_minutes = "0" + min;
        return hour + "h" + " " + zero_minutes + "m";
    }
    return hour + "h" + " " + min + "m";
};
var length_setter_songs = function (minutes, seconds) {
    if (minutes === void 0) { minutes = -1; }
    if (seconds === void 0) { seconds = -1; }
    if ((minutes < 0 || seconds < 0) || (minutes === 0 && seconds === 0)) {
        return "N/A";
    }
    if (seconds < 10) {
        var new_seconds = "0" + seconds;
        return minutes + ":" + new_seconds;
    }
    return minutes + ":" + seconds;
};
var date1 = dateSetter(1997);
var myPic = { Name: 'christmas santa', Year: dateSetter(1997), By: 'me', Type: 'Photo' };
var christmas_party = { Name: 'Christmas', Year: dateSetter(2016),
    Director: ['Josh Gordon', 'Will Speck'],
    Actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'],
    Movie_Genre: "Comedy", Length: length_setter_movies(1, 20), Type: "Movie" };
var slay = { Name: "Formation", Year: 2016, Artist: ["Beyonce"],
    Song_Genre: "Bounce",
    Album: "Lemonade", Length: length_setter_songs(3, 26),
    Type: "Song" };
var doctor_strange = { Name: "Doctor Strange", Year: 2016,
    Director: ["Scott Derrickson"], Actors: ["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
    Movie_Genre: "Fantasy", Length: length_setter_movies(1, 55), Type: "Movie" };
var war_games = { Name: "War Games", Year: 1983, Director: ["John Badham"], Actors: ["Mathew Broderick", "Ally Sheedy", "John Wood"],
    Movie_Genre: "Science Fiction", Length: length_setter_movies(1, 54), Type: "Movie" };
var afghan_girl = { Name: "Afghan Girl", Year: 1984, By: "Steve McCurry", Type: "Photograph" };
var migrant_mother = { Name: "Migrant Mother",
    Year: 1936, By: "Dorothea Lange", Type: "Photo" };
var stayin_alive = { Name: "Stayin' Alive", Year: 1977, Artist: ["Bee Gees"], Song_Genre: "Disco",
    Album: "Saturday Night Fever", Length: length_setter_songs(4, 45), Type: "Song" };
var lego_batman = { Name: "The Lego Batman Movie",
    Year: 2017, Director: ["Chris McKay"],
    Actors: ["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
    Movie_Genre: "Animation", Length: length_setter_movies(), Type: "Movie" };
var licoln_photo = { Name: "Gettysburg Potrait", Year: 1863,
    By: "Alexander Gardner", Type: "Photo" };
var hail_caesar = { Name: "Hail, Caesar!",
    Year: 2015, Director: ["Joel Coen", "Ethan Coen"],
    Actors: ["Josh Brolin", "George Clooney", "Alden Ehrenreich", "Ralph Fiennes",
        "Jonah Hill", "Scarlett Johansson", "Tilda Swilton", "Channing Tatum"],
    Movie_Genre: "Comedy", Length: length_setter_movies(1, 46),
    Type: "Movie" };
var moonlight_sonata = { Name: "Moonlight Sonata", Year: 1801, Artist: ["Beethoven"],
    Song_Genre: "Classical", Album: "Piano Sonatas",
    Length: length_setter_songs(15, 1), Type: "Song" };
var vivaldi_summer = { Name: "Summer", Year: 1723, Artist: ["Vivaldi"], Song_Genre: "Classical",
    Album: "The Four Seasons",
    Length: length_setter_songs(40, 42),
    Type: "Song" };
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
//# sourceMappingURL=library.js.map