import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";

function Search() {
  
  const [books, setBooks] = useState([])
  const [bookTitle, setBookTitle] =useState("")
  // {
  //   title: "",
  //   authors: "",
  //   description: "",
  //   image: "",
  //   link: ""
  // }
  
  function handleSearch(event) {
    event.preventDefault();
    console.log(bookTitle + " RERRETRETRD");
    API.getBook({
      bookTitle
    }).then(res => 
      //console.log(res.data);
      setBooks(res.data.items)
    )
    .catch(err => console.log(err));
};

function handleInputChange(event) {
  console.log(event.target.value + " event");
  const  {value}  = event.target;
  setBookTitle(value.trim())
  
};
  
    return (

    <Container>
      <Navbar/>
      <Jumbotron/>
      <Card search={handleSearch} inputText={handleInputChange}>
      {books.map(book => (
          <ListItem 
          key={book.volumeInfo.title}
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