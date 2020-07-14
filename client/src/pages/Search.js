import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";

function Search() {
  
  const [books, setBooks] = useState([])
  const [bookTitle, setBookTitle] =useState("")
  
  function handleSearch(event) {
    event.preventDefault();
    API.getBook({
      bookTitle
    }).then(res => 
      setBooks(res.data.items)
    ).then(() => setBookTitle(""))
    .catch(err => console.log(err));
};

function handleInputChange(event) {
  const  {value}  = event.target;
  setBookTitle(value.trim())
};

function saveBook(event) {
  event.preventDefault()
  console.log(event.target.getAttribute("value"));
  let bookData = books[event.target.getAttribute("value")];
  API.saveBook(
    {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors[0],
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.infoLink
    }
  )
};
  
    return (
      <Container>
        <Navbar/>
        <Jumbotron/>
        <Card search={handleSearch} inputText={handleInputChange} enteredText={bookTitle} results="Results">
        {books.map((book, index) => (
            <ListItem 
            saveButton={saveBook}
            key={index}
            value={index}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            link={book.volumeInfo.infoLink}
            image={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
            />
        )) 
        }
        </Card> 
      </Container>
    );
  }

export default Search;