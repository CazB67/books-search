import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import {Card, ListItem} from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";

function Search() {
  
  // const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({
  //   title: "",
  //   authors: "",
  //   description: "",
  //   image: "",
  //   link: ""
  // })

  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

    return (

    <Container>
      <Navbar/>
      <Jumbotron/>
      <Card><ListItem key={book.title}
      title={book.title} 
      authors={book.authors}
      link={book.link}
      image={book.image}
      description={book.description}/></Card> 
      
    </Container>

    );
  }


export default Search;