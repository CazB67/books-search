import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";
import bookImage from '../images/books.jpg';

function Search() {
  
  const [books, setBooks] = useState([])
  const [bookTitle, setBookTitle] =useState("")
  const [visibility, setVisibility] =useState("")

  useEffect(() => {
    setVisibility("card mt-5 d-none");
    setBooks([]);
  }, [])

  function handleSearch(event) {
    event.preventDefault();
    setBookTitle(bookTitle.trim());
    API.getBook({
      bookTitle
    }).then(res => setBooks(res.data.items)
    ).then(() => setVisibility("card mt-5")
    ).then(() => setBookTitle("")
    ).catch(err => console.log(err));
};

function handleInputChange(event) {
  event.preventDefault()
  const  {value}  = event.target;
  setBookTitle(value)  
};

function saveBook(event) {
  event.preventDefault()
  let bookData = books[event.target.getAttribute("value")];
  API.saveBook(
    {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors.join( ", "),
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.infoLink
    }
  ).then(() => alert("Book is saved"))
};
    return (
      <Container>
        <Navbar/>
        <Jumbotron/>
        <Card search={handleSearch} inputText={handleInputChange} enteredText={bookTitle} results="Results" visibility={visibility}>
          {books.map((book, index) => (
            <ListItem 
              saveButton={saveBook}
              key={index}
              value={index}
              title={book.volumeInfo.title}
              link={book.volumeInfo.infoLink}
              image={typeof book.volumeInfo.imageLinks !== "undefined" ? book.volumeInfo.imageLinks.thumbnail : bookImage}
              description={book.volumeInfo.description}
              authors={typeof book.volumeInfo.authors !== "undefined" ? book.volumeInfo.authors.join(", ") : ""}
            />
        )) 
        }
        </Card> 
      </Container>
    );
  }

export default Search;