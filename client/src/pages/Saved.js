import React, { useState, useEffect }from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {SavedCard, SavedListItem} from "../components/SavedCard";
import { Container } from "../components/Grid";
import API from "../utils/API";



function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getSavedBooks()
  }, [])
  
  function getSavedBooks() {
    API.getSavedBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  function deleteBook(event) {
    event.preventDefault()
    console.log(event.target.getAttribute("value"))
    API.deleteBook(event.target.getAttribute("value"))
    .then(res =>
      getSavedBooks()
    )
  }

    return (
      <Container>
        <Navbar/>
        <Jumbotron/>
        <SavedCard  results="Saved Books">
         {books.map(book => (
            <SavedListItem 
            deleteButton={deleteBook}
            key={book._id}
            value={book._id}
            title={book.title}
            authors={book.authors}
            link={book.link}
            image={book.image}
            description={book.description}
            />
        )) 
          } 
        </SavedCard> 
      </Container>
    );
  }


export default Saved;