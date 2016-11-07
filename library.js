/*
*Interfaces are a feature from Typescript.
*They allow me to consitently shape how an object
*containing a song/movie/photo will be cataloged
*It doesn't transpile to javascript
*/
"use strict";
/*Created a class library because it would allow me to utilize modules
*and allow my code to be better organized and more easily tested
*/
var Library = (function () {
    function Library() {
        var _this = this;
        //library is an object that will store
        //with key being the type (song/movie/photo)
        //and value being an object containing information 
        //about the media
        this.library = { song: [], movie: [], photo: [] };
        // contains items borrowed from the library
        this.borrowed = [];
        //helper function created to maintain a consistent
        //looking length of movie
        this.length_setter_movies = function (hour, min) {
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
        this.length_setter_songs = function (minutes, seconds) {
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
        /*
        * Checks to see if attribute matches the search query and adds it to return items if it does
        * where:
        * library item is the item we're  seeing that matches our query
        * attr is attribute we're searching for
        * attribute name is the type of attribute
        * return_items is the array with all the matches we've found so far
        */
        this.addItem = function (library_item, attr, attr_name, return_items) {
            //if user provided an attribute
            if (attr !== "") {
                _this.queryMatch(attr, attr_name, library_item, return_items);
            }
            else {
                for (var attribute in library_item) {
                    _this.queryMatch(attribute, attr_name, library_item, return_items);
                }
            }
        };
        //function to insert element in sorted order
        // based on the item's name or year released
        this.return_sorted_items = function (return_items, matched_item) {
            for (var i = 0; i < return_items.length; i++) {
                if (return_items[i]["name"] > matched_item["name"]) {
                    //if the first element is larger than the element
                    //we're seeking to insert
                    if (i === 0) {
                        return_items.splice(i, 0, matched_item);
                        return return_items;
                    }
                    return_items.splice(i - 1, 0, matched_item);
                    return return_items;
                }
                else {
                    return_items.push(matched_item);
                    return return_items;
                }
            }
        };
    }
    Object.defineProperty(Library.prototype, "library_collection", {
        //returns entire library unsorted
        get: function () {
            return (this.library);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "library_movie", {
        //returns all movies in library sorted
        get: function () {
            return this.filterBy("type", "movie");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "library_song", {
        //returns all songs in library sorted
        get: function () {
            return this.filterBy("type", "song");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "library_photo", {
        //returns all photos in library sorted
        get: function () {
            return this.filterBy("type", "photo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "borrowed_items", {
        //retuns borrowed items
        get: function () {
            return this.borrowed;
        },
        enumerable: true,
        configurable: true
    });
    Library.prototype.addMovie = function (photo) {
        this.library.movie.push(photo);
    };
    Library.prototype.addPhoto = function (movie) {
        this.library.photo.push(movie);
    };
    Library.prototype.addSong = function (song) {
        this.library.song.push(song);
    };
    /*
    filters and searches the library and returns results
    searches by attribute, attribute name and (optionally) type
    if no type is given then it searches across all items in library
    */
    Library.prototype.filterBy = function (attr_case, attr_name_case, type_case) {
        if (type_case === void 0) { type_case = "all"; }
        //makes all parameters lower case for better searching
        var type = type_case.toLowerCase();
        //if attr_case is given as something like Song Genre 
        //it converts it to song_genre to match the key in 
        //the library data structure
        //if attr_case is something like "Year" then it will be "year"
        var attr_split = String(attr_case).toLowerCase().split(" ");
        var attr = attr_split.join("_");
        var attr_name = String(attr_name_case).toLowerCase();
        //array for sorted and filtered media to be returned in
        var return_items = [];
        //optimizes query
        attr, attr_name, type = this.optimizeQuery(attr, attr_name, type);
        //if a type parameter is provided   
        if (type === "song" || type === "movie" || type === "photo") {
            for (var _i = 0, _a = this.library[type]; _i < _a.length; _i++) {
                var library_item = _a[_i];
                this.addItem(library_item, attr, attr_name, return_items);
            }
            return return_items;
        }
        else if (attr === "genre") {
            for (var media_type in this.library) {
                for (var _b = 0, _c = this.library[media_type]; _b < _c.length; _b++) {
                    var library_item = _c[_b];
                    if (media_type === "movie") {
                        this.addItem(library_item, "movie_" + attr, attr_name, return_items);
                    }
                    else if (media_type === "song") {
                        this.addItem(library_item, "song_" + attr, attr_name, return_items);
                    }
                }
            }
            return return_items;
        }
        else {
            for (var media_type in this.library) {
                for (var _d = 0, _e = this.library[media_type]; _d < _e.length; _d++) {
                    var library_item = _e[_d];
                    this.addItem(library_item, attr, attr_name, return_items);
                }
            }
            return return_items;
        }
    };
    /*If attribute is library type specific (so if it's "song_genre"" or "director" indicating type is song and movie respectively)
    * and type is listed as all or ""
    * or if type is movie and attribute is genre it returns movie_genre
    * this modifies type to make the query search faster.
    */
    Library.prototype.optimizeQuery = function (attr, attr_name, type) {
        if (type === void 0) { type = "all"; }
        if ((type === "all" || type === "") && (attr != "name" || attr != "year")) {
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
        return attr, attr_name, type;
    };
    /*
    * checks to see if there exists an attribute type in the library item object
    */
    Library.prototype.queryMatch = function (attr, attr_name, library_item, return_items) {
        if ((String(library_item[attr]).toLowerCase()).indexOf(String(attr_name)) !== -1) {
            //if no item in array
            if (return_items.length === 0) {
                //makes sure the years are exact 
                //so that a a search for the year 20 doesn't show results for the year 200 or 2000 or 2016
                if (attr !== "year") {
                    return_items.push(library_item);
                }
                else {
                    if (String(library_item[attr]) === String(attr_name)) {
                        return_items.push(library_item);
                    }
                }
            }
            else {
                //makes sure the years are exact 
                if (attr !== "year") {
                    this.return_sorted_items(return_items, library_item);
                }
                else {
                    if (String(library_item[attr]) === String(attr_name)) {
                        this.return_sorted_items(return_items, library_item);
                    }
                }
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
    Library.prototype.borrow = function (attr_case, attr_name_case, type_case) {
        if (type_case === void 0) { type_case = "all"; }
        //Uses the filterBy function to search for user query
        var search = this.filterBy(attr_case, attr_name_case, type_case);
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
            if (x["year"] < (current_year - 1) && (this.borrowed.indexOf(x) === -1)) {
                this.borrowed.push(x);
                items_borrowed.push(x["name"]);
            }
            else if ((this.borrowed.indexOf(x) !== -1)) {
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
    };
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=library.js.map