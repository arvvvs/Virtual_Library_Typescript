
/*
*Interfaces are a feature form typescript.  
*They allow me to consitently shape how an object
*containing a song/movie/photo will be cataloged
*It doesn't transpile to javascript
*/

interface librarySong {
    name: String;
    year: Number;
    artist: Array<String>;
    song_genre: String;
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
export class Library {

    //library is an object that will store
    //with key being the type (song/movie/photo)
    //and value being an object containing information 
    //about the media
    private library = { song: [], movie: [], photo: [] };
    // contains items borrowed from the library
    private borrowed = [];
    //returns entire library unsorted
    get library_collection() {
        return (this.library);
    }
    //returns all movies in library sorted
    get library_movie() {
        return this.filterBy("type", "movie");
    }
    //returns entire library sorted
    get library_song() {
        return this.filterBy("type", "song");
    }
    //returns library sorted
    get library_photo() {
        return this.filterBy("type", "photo");
    }
    get borrowed_items() {
        return this.borrowed;
    }
    public addMovie(photo: libraryMovie) {
        this.library.movie.push(photo);

    }

    public addPhoto(movie: libraryPhoto) {
        this.library.photo.push(movie);
    }
    public addSong(song: librarySong) {
        this.library.song.push(song);
    }


    //function created to maintain a consistent
    //looking length of movie or song
    public length_setter_movies = (hour: number = -1, min: number = -1) => {
        if ((hour < 0 || min < 0) || (hour === 0 && min === 0)) {
            return "N/A";
        }
        if (min < 10) {
            let zero_minutes = "0" + min;
            return hour + "h" + " " + zero_minutes + "m";
        }
        return hour + "h" + " " + min + "m";
    }
    //to help maitain a consistent looking length of songs
    public length_setter_songs = (minutes: number = -1, seconds: number = -1) => {
        if ((minutes < 0 || seconds < 0) || (minutes === 0 && seconds === 0)) {
            return "N/A";
        }
        if (seconds < 10) {
            let new_seconds = "0" + seconds;
            return minutes + ":" + new_seconds;
        }
        return minutes + ":" + seconds;
    }
    /*
    filters and searches the library and returns results
    searches by attribute, attribute name and (optionally) type
    if no type is given then it searches across all items in library
    */
    public filterBy(attr_case: String, attr_name_case, type_case: String = "all"): Array<Object> {
        //makes all parameters lower case for better searching
        let type = type_case.toLowerCase();
        //if attr_case is given as something like Song Genre 
        //it converts it to song_genre to match the key in 
        //the library data structure
        //if attr_case is something like "Year" then it will be "year"
        let attr_split = String(attr_case).toLowerCase().split(" ");
        let attr = attr_split.join("_");
        let attr_name = String(attr_name_case).toLowerCase();
        //array for sorted and filtered media to be returned in
        let return_items = [];
        //optimizes query
        
        attr, attr_name, type = this.optimizeQuery(attr, attr_name, type);
        
      console.log(type);
        
        //if a type parameter is provided   
        if (type === "song" || type === "movie" || type === "photo") {
            for (let x of this.library[type]) {
                this.addItem(x, attr, attr_name, return_items);

            }
            return return_items;
        }
        //if a generic "genre" is given as an attribute
        else if (attr === "genre") {
            for (let y in this.library) {
                for (let x of this.library[y]) {
                    if (y === "movie") {
                        this.addItem(x, "movie_" + attr, attr_name, return_items);
                    }
                    else if (y === "song") {
                        this.addItem(x, "song_" + attr, attr_name, return_items);
                    }

                }

            }
            return return_items;
        }
        //search all attributes if no type or non existent type is given
        else {
            for (let y in this.library) {
                for (let x of this.library[y]) {
                    this.addItem(x, attr, attr_name, return_items);

                }

            }
            return return_items;

        }

    }
    /*If attribute is library type specific (so if it's "song_genre"" or "director" indicating type is song and movie respectively) 
    * and type is listed as all
    * this modifies type to make the query search faster.
    */
    private optimizeQuery(attr, attr_name, type="all") {  

        if ((type === "all" || type ==="")  && (attr != "name" || attr != "year")) {
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
        return attr, attr_name, type
    }
    /*
    * Checks to see if attribute matches the search query and adds it to return items if it does
    */
    private addItem = function (x, attr, attr_name, return_items) {
        //if attribute field is not empty
        if (attr !== "") {
            this.queryMatch(attr, attr_name, x, return_items);
        }

        else {
            for (let i in x) {
                this.queryMatch(i, attr_name, x, return_items);
            }
        }
    }
    /*
    * checks to see if there exists an attribute type in the library item object
    */
    private queryMatch(attr, attr_name, x, return_items) {
        if ((String(x[attr]).toLowerCase()).indexOf(String(attr_name)) !== -1) {

            //if no item in array
            if (return_items.length === 0) {
                //makes sure the years are exact 
                //so that a a search for the year 20 doesn't show results for the year 200
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

                    this.return_sorted_items(return_items, x);
                }
                else {
                    if (String(x[attr]) === String(attr_name)) {
                        this.return_sorted_items(return_items, x);

                    }
                }
            }
        }
    }
    //function to insert element in sorted order
    // based on the item's name or year released
    private return_sorted_items = (return_items, x) => {
        for (let i = 0; i < return_items.length; i++) {

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
    }


    /*
    * The borrow function uses the filterBy function to find the items
    * The user wants to borrow and then checks to see if they can be borrowed
    * The item can only be borrowed if and only if the item is over a year old
    * and not already borrowed.
    * The function will return a string telling the user which items he/she borrowed
    * and which items they were unable to borrow and why
    */
    public borrow(attr_case: String, attr_name_case, type_case: String = "all") {
        //Uses the filterBy function to search for user query
        let search = this.filterBy(attr_case, attr_name_case, type_case);
        //Gets the current year
        let current_date = new Date();
        let current_year = current_date.getFullYear();
        //Stores the names of the items we're borrowing, 
        //items already borrowed, 
        //and items too new to borrow
        let items_borrowed = [];
        let items_not_borrowed = [];
        let items_already_borrowed = [];
        //contains the information to be returned in a user readable way
        let return_string = "";

        for (let x of search) {
            //checks to see if it's old enough to be borrowed
            //and if it's already been borrowed
            if (x["year"] < (current_year - 1) && (this.borrowed.indexOf(x) === -1)) {
                this.borrowed.push(x);
                items_borrowed.push(x["name"]);
            }
            //adds name to already borrowed list if borrowed
            else if ((this.borrowed.indexOf(x) !== -1)) {
                items_already_borrowed.push(x["name"]);
            }
            //if item is too old pushes its name to items_not_borrowed array
            else {
                items_not_borrowed.push(x["name"]);
            }
        }
        //Calibrates the grammer/language of return statement
        if (items_borrowed.length > 0) {
            return_string += "You borrowed " + items_borrowed.join(" , ");
            return_string += "\n"
        }
        if (items_already_borrowed.length > 0) {
            return_string += "You have already borrowed " + items_already_borrowed.join(" , ");
            return_string += "\n"
        }
        if (items_not_borrowed.length > 0) {
            let these_this = "";
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
}

