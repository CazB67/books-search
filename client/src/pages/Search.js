import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";

function Search() {
  
  const [books, setBooks] = useState([])
  const [bookTitle, setBookTitle] =useState("")
  const [visibility, setVisibility] =useState("")
  
  useEffect(() => {
    setVisibility("card mt-5 d-none")
  }, [])

  function handleSearch(event) {
    event.preventDefault();
    setBookTitle(bookTitle.trim());
    API.getBook({
      bookTitle
    }).then(res => 
      setBooks(res.data.items)
    ).then(() => setVisibility("card mt-5")
    ).then(() => setBookTitle(""))
    .catch(err => console.log(err));
};

function handleInputChange(event) {
  const  {value}  = event.target;
  setBookTitle(value)  
};

function saveBook(event) {
  event.preventDefault()
  console.log(event.target.getAttribute("value"));
  let bookData = books[event.target.getAttribute("value")];
  API.saveBook(
    {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
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
        <Card search={handleSearch} inputText={handleInputChange} enteredText={bookTitle} results="Results" visibility={visibility}>
        {books.map((book, index) => (
            <ListItem 
            saveButton={saveBook}
            key={index}
            value={index}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors.join(", ")}
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