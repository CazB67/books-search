import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Modal from "../components/ModalExample";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";
import bookImage from '../images/books.jpg';

function Search() {
  
  const [books, setBooks] = useState([])
  const [bookTitle, setBookTitle] =useState("")
  const [visibility, setVisibility] =useState("")
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState([]);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setVisibility("card mt-5 d-none");
    setBooks([]);
    setModal(false);
    setBookTitle("");
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
  console.log(bookData.id);
  API.saveBook(
    {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors.join( ", "),
      description: bookData.volumeInfo.description,
      image: typeof bookData.volumeInfo.imageLinks !== "undefined" ? bookData.volumeInfo.imageLinks.thumbnail : bookImage,
      link: bookData.volumeInfo.infoLink
    }
      ).then(() => showModal()
      ).then(() => button.push(bookData.id)
      ).catch(err => console.log(err));
};
    return (
      <Container>
        <Navbar/> 
        <Modal/>
        <Jumbotron/>
        <Modal modal={modal} toggle={hideModal}/>
        <Card search={handleSearch} inputText={handleInputChange} enteredText={bookTitle} results="Results" visibility={visibility}>
          {books.map((book, index) => (
            <ListItem 
              removebutton={button.includes(book.id) ? "d-none" : "float-right" }
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