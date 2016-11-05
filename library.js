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
//function created to maintain a consistent
//looking length of movie or song
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
//to help maitain a consistent looking length of movie or song
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
var myPic = { name: 'christmas santa', year: 1997, photographer: 'me', type: 'Photo' };
var christmas_party = { name: 'Office Christmas Party', year: 2016,
    director: ['Josh Gordon', 'Will Speck'],
    actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'],
    movie_genre: "Comedy", length: length_setter_movies(1, 20), type: "Movie" };
var slay = { name: "Formation", year: 2016, artist: ["Beyonce"],
    song_genre: "Bounce",
    album: "Lemonade", length: length_setter_songs(3, 26),
    type: "Song" };
var doctor_strange = { name: "Doctor Strange", year: 2016,
    director: ["Scott Derrickson"], actors: ["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
    movie_genre: "Fantasy", length: length_setter_movies(1, 55), type: "Movie" };
var war_games = { name: "War Games", year: 1983, director: ["John Badham"], actors: ["Mathew Broderick", "Ally Sheedy", "John Wood"],
    movie_genre: "Science Fiction", length: length_setter_movies(1, 54), type: "Movie" };
var afghan_girl = { name: "Afghan Girl", year: 1984, photographer: "Steve McCurry", type: "Photograph" };
var migrant_mother = { name: "Migrant Mother",
    year: 1936, photographer: "Dorothea Lange", type: "Photo" };
var stayin_alive = { name: "Stayin' Alive", year: 1977, artist: ["Bee Gees"], song_genre: "Disco",
    album: "Saturday Night Fever", length: length_setter_songs(4, 45), type: "Song" };
var lego_batman = { name: "The Lego Batman Movie",
    year: 2017, director: ["Chris McKay"],
    actors: ["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
    movie_genre: "Animation", length: length_setter_movies(), type: "Movie" };
var licoln_photo = { name: "Gettysburg Potrait", year: 1863,
    photographer: "Alexander Gardner", type: "Photo" };
var hail_caesar = { name: "Hail, Caesar!",
    year: 2015, director: ["Joel Coen", "Ethan Coen"],
    actors: ["Josh Brolin", "George Clooney", "Alden Ehrenreich", "Ralph Fiennes",
        "Jonah Hill", "Scarlett Johansson", "Tilda Swilton", "Channing Tatum"],
    movie_genre: "Comedy", length: length_setter_movies(1, 46),
    type: "Movie" };
var moonlight_sonata = { name: "Moonlight Sonata", year: 1801, artist: ["Beethoven"],
    song_genre: "Classical", album: "Piano Sonatas",
    length: length_setter_songs(15, 1), type: "Song" };
var vivaldi_summer = { name: "Summer", year: 1723, artist: ["Vivaldi"], song_genre: "Classical",
    album: "The Four Seasons",
    length: length_setter_songs(40, 42),
    type: "Song" };
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
// console.log(JSON.stringify(library, null, 4));
//filters and searches the attr.
function filterBy(attr_case, attr_name_case, type_case) {
    if (type_case === void 0) { type_case = "all"; }
    var type = type_case.toLowerCase();
    var attr = attr_case.toLowerCase();
    var attr_name = "";
    if (typeof (attr_name_case) === "String") {
        attr_name = attr_name_case.toLowerCase();
    }
    else {
        attr_name = attr_name_case;
    }
    var return_items = [];
    if (type === "song" || type === "movie" || type === "photo") {
        for (var _i = 0, _a = library[type]; _i < _a.length; _i++) {
            var x = _a[_i];
            if (String(x[attr]).toLowerCase() === String(attr_name)) {
                return_items[x["type"]] = x;
            }
        }
        console.log(return_items);
        return return_items;
    }
    else {
    }
    return {};
}
filterBy("year", 2016, "song");
//# sourceMappingURL=library.js.map