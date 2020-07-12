//AIzaSyBq3Iasy2twY_1xhq32EzbMbaaj9EK1AJk

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBook: function(bookTitle) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle);
  },
};
