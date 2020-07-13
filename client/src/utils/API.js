

import axios from "axios";

// Export an object containing methods we'll use for accessing the Google Books API

export default {
  getBook: function(searchQuery) {
    console.log(searchQuery.bookTitle);
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery.bookTitle)
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData );
  },
  getSavedBooks: function() {
    return axios.get("/api/books")
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
};
