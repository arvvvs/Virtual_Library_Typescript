//library is an object that will store
//with key being the type (song/movie/photo)
//and value being an object containing information 
//about the media
var library = { song: [], movie: [], photo: [] };
// contains items borrowed from the library
var borrowed = [];
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
//to help maitain a consistent looking length of songs
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
//Creating items to add and test for the library
var myPic = { name: 'christmas santa', year: 1997, photographer: 'me', type: 'Photo' };
var christmas_party = {
    name: 'Office Christmas Party', year: 2016,
    director: ['Josh Gordon', 'Will Speck'],
    actors: ['Jason Bateman', 'Olivia Munn', 'TJ Miller'],
    movie_genre: "Comedy", length: length_setter_movies(1, 20), type: "Movie"
};
var ten_cloverfield = {
    name: '10 Cloverfield Lane', year: 2016,
    director: ['Dan Trachtenberg'],
    actors: ['Mary Elizabeth Winstead', 'John Goodman', 'John Gallagher Jr.'],
    movie_genre: "Horror", length: length_setter_movies(1, 46), type: "Movie"
};
var slay = {
    name: "Formation", year: 2016, artist: ["Beyonce"],
    song_genre: "Bounce",
    album: "Lemonade", length: length_setter_songs(3, 26),
    type: "Song"
};
var crazy_in_love = {
    name: "Crazy in Love", year: 2003, artist: ["Beyonce"],
    song_genre: "R&B",
    album: "Dangerously in Love", length: length_setter_songs(3, 56),
    type: "Song"
};
var doctor_strange = {
    name: "Doctor Strange", year: 2016,
    director: ["Scott Derrickson"], actors: ["Benedict Cumberbatch", "Tilda Swilton", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelson"],
    movie_genre: "Fantasy", length: length_setter_movies(1, 55), type: "Movie"
};
var war_games = {
    name: "War Games", year: 1983, director: ["John Badham"], actors: ["Mathew Broderick", "Ally Sheedy", "John Wood"],
    movie_genre: "Science Fiction", length: length_setter_movies(1, 54), type: "Movie"
};
var afghan_girl = { name: "Afghan Girl", year: 1984, photographer: "Steve McCurry", type: "Photograph" };
var migrant_mother = {
    name: "Migrant Mother",
    year: 1936, photographer: "Dorothea Lange", type: "Photo"
};
var stayin_alive = {
    name: "Stayin' Alive", year: 1977, artist: ["Bee Gees"], song_genre: "Disco",
    album: "Saturday Night Fever", length: length_setter_songs(4, 45), type: "Song"
};
var lego_batman = {
    name: "The Lego Batman Movie",
    year: 2017, director: ["Chris McKay"],
    actors: ["Will Arnett", "Michael Cera", "Ralph Fiennes", "Rosario Dawson"],
    movie_genre: "Animation", length: length_setter_movies(), type: "Movie"
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
    movie_genre: "Comedy", length: length_setter_movies(1, 46),
    type: "Movie"
};
var moonlight_sonata = {
    name: "Moonlight Sonata", year: 1801, artist: ["Beethoven"],
    song_genre: "Classical", album: "Piano Sonatas",
    length: length_setter_songs(15, 1), type: "Song"
};
var vivaldi_summer = {
    name: "Summer", year: 1723, artist: ["Vivaldi"], song_genre: "Classical",
    album: "The Four Seasons",
    length: length_setter_songs(40, 42),
    type: "Song"
};
var winter_horseman = { name: "Winter Horseman", year: 2016, photographer: "Anthony Lau", type: "Photo" };
var whiskey_tango_foxtrot = { name: "Whiskey Tango Foxtrot", year: 2016, director: ["Glenn Ficarra", "John Requa"], actors: ["Tina Fey", "Margot Robbie", "Martin Freeman", "Alfred Molina", "Christopher Abbot", "Billy Bob Thorton"], movie_genre: "Comedy", length: length_setter_movies(1, 52), type: "Movie" };
var stutterer = { name: "Stutter", year: 2015, director: ["Benjamin Cleary"], actors: ["Matthew Needham", "Eric Richard"], movie_genre: "Short Film", length: length_setter_movies(0, 12), type: "Movie" };
//adds test item to library
addSong(moonlight_sonata);
addSong(slay);
addSong(crazy_in_love);
addSong(stayin_alive);
addSong(vivaldi_summer);
addMovie(christmas_party);
addMovie(doctor_strange);
addMovie(war_games);
addMovie(ten_cloverfield);
addMovie(lego_batman);
addMovie(hail_caesar);
addMovie(whiskey_tango_foxtrot);
addMovie(stutterer);
addPhoto(myPic);
addPhoto(afghan_girl);
addPhoto(licoln_photo);
addPhoto(migrant_mother);
addPhoto(winter_horseman);
/*
filters and searches the library and returns results
searches by attribute, attribute name and (optionally) type
if no type is given then it searches across all items in library
*/
function filterBy(attr_case, attr_name_case, type_case) {
    if (type_case === void 0) { type_case = "all"; }
    //makes all parameters lower case for better searching
    var type = type_case.toLowerCase();
    //if attr_case is something like Song Genre 
    //it converts it to song_genre to match the key in 
    //the library data structure
    //if attr_case is something like "Year" then it will be "year"
    var attr_split = String(attr_case).toLowerCase().split(" ");
    var attr = attr_split.join("_");
    var attr_name = String(attr_name_case).toLowerCase();
    //array for sorted and filtered media to be returned in
    var return_items = [];
    //if attribute is library type specific (so if it's "song_genre"" or "director" indicating type is song and movie respectively) 
    //and type is listed as all
    //this fixes type
    if (type === "all" && (attr != "name" || attr != "year")) {
        if (attr === "artist" || attr === "song_genre" || (attr === "type" && attr_name === "song")) {
            type = "song";
        }
        else if (attr === "director" || attr === "actors" || attr === "movie_genre" || (attr === "type" && attr_name === "movie")) {
            type = "movie";
        }
        else if (attr === "photographer" || (attr === "type" && attr_name === "photo")) {
            type = "photo";
        }
    }
    //fixes attribute if "genre" is given with a type
    //so if attribute is "genre" and type is "movie"
    //fixes attribute to be movie_genre
    if (type === "movie" && attr === "genre") {
        attr = "movie_genre";
    }
    if (type === "song" && attr === "genre") {
        attr = "song_genre";
    }
    //if a type parameter is provided   
    if (type === "song" || type === "movie" || type === "photo") {
        for (var _i = 0, _a = library[type]; _i < _a.length; _i++) {
            var x = _a[_i];
            addItem(x, attr, attr_name, return_items);
        }
        return return_items;
    }
    else if (attr === "genre") {
        for (var y in library) {
            for (var _b = 0, _c = library[y]; _b < _c.length; _b++) {
                var x = _c[_b];
                if (y === "movie") {
                    addItem(x, "movie_" + attr, attr_name, return_items);
                }
                else if (y === "song") {
                    addItem(x, "song_" + attr, attr_name, return_items);
                }
            }
        }
        return return_items;
    }
    else {
        for (var y in library) {
            for (var _d = 0, _e = library[y]; _d < _e.length; _d++) {
                var x = _e[_d];
                addItem(x, attr, attr_name, return_items);
            }
        }
        return return_items;
    }
}
/*
* Checks to see if attribute matches the search query and adds it to return items if it does
*/
var addItem = function (x, attr, attr_name, return_items) {
    if ((String(x[attr]).toLowerCase()).indexOf(String(attr_name)) !== -1) {
        //insert into array sorted
        if (return_items.length === 0) {
            //Provides more accurate matching for year (makes sure the years are exact)
            if (attr !== "year") {
                return_items.push(x);
            }
            else {
                if (String(x[attr]) === String(attr_name)) {
                    return_items.push(x);
                }
            }
        }
        else {
            //inserts element in sorted order
            //so worst case for operation is O(N) instead of O(log N)
            if (attr !== "year") {
                return_items = return_sorted_items(return_items, x);
            }
            else {
                if (String(x[attr]) === String(attr_name)) {
                    return_items = return_sorted_items(return_items, x);
                }
            }
        }
    }
};
//function to insert element in sorted order
// based on the item's name or year released
var return_sorted_items = function (return_items, x) {
    for (var i = 0; i < return_items.length; i++) {
        if (return_items[i]["name"] > x["name"]) {
            //if the first element is larger than the element
            //we're seeking to insert
            if (i === 0) {
                return_items.splice(i, 0, x);
                return return_items;
            }
            return_items.splice(i - 1, 0, x);
            return return_items;
        }
        else {
            return_items.push(x);
            return return_items;
        }
    }
};
/*
* The borrow function uses the filterBy function to find the items
* The user wants to borrow and then checks to see if they can be borrowed
* The item can only be borrowed if and only if the item is over a year old
* and not already borrowed.
* The function will return a string telling the user which items he/she borrowed
* and which items they were unable to borrow and why
*/
function borrow(attr_case, attr_name_case, type_case) {
    if (type_case === void 0) { type_case = "all"; }
    //Uses the filterBy function to search for user query
    var search = filterBy(attr_case, attr_name_case, type_case);
    //Gets the current year
    var current_date = new Date();
    var current_year = current_date.getFullYear();
    //Stores the names of the items we're borrowing, 
    //items already borrowed, 
    //and items too new to borrow
    var items_borrowed = [];
    var items_not_borrowed = [];
    var items_already_borrowed = [];
    //contains the information to be returned in a user readable way
    var return_string = "";
    for (var _i = 0, search_1 = search; _i < search_1.length; _i++) {
        var x = search_1[_i];
        //checks to see if it's old enough to be borrowed
        //and if it's already been borrowed
        if (x["year"] < (current_year - 1) && (borrowed.indexOf(x) === -1)) {
            borrowed.push(x);
            items_borrowed.push(x["name"]);
        }
        else if ((borrowed.indexOf(x) !== -1)) {
            items_already_borrowed.push(x["name"]);
        }
        else {
            items_not_borrowed.push(x["name"]);
        }
    }
    //Calibrates the grammer/language of return statement
    if (items_borrowed.length > 0) {
        return_string += "You borrowed " + items_borrowed.join(" , ");
        return_string += "\n";
    }
    if (items_already_borrowed.length > 0) {
        return_string += "You have already borrowed " + items_already_borrowed.join(" , ");
        return_string += "\n";
    }
    if (items_not_borrowed.length > 0) {
        var these_this = "";
        if (items_not_borrowed.length > 1) {
            these_this = "these items are";
        }
        else {
            these_this = "this item is";
        }
        return_string += "You were unable to borrow " + items_not_borrowed.join(" , ") + " because " + these_this + " too new.";
    }
    //returns a string telling user of items they borrowed,
    //and they were unable to borrow
    return return_string;
}
// let stuff = filterBy("genre", "short");
// console.log(stuff);
var borrowing = borrow("type", "photo");
// console.log(borrowing);
borrowing = borrow("type", "photo");
console.log(borrowing);
//# sourceMappingURL=library.js.map