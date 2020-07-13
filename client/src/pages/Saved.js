
import React from "react";
import Navbar from "../components/Navbar";
//import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import {SavedCard, SavedListItem} from "../components/SavedCard";
import { Container } from "../components/Grid";

function Saved() {
 

    return (
      <Container>
        <Navbar/>
        <Jumbotron/>
        <SavedCard  results="Saved">
        
            <SavedListItem 
            // saveButton={saveBook}
            // key={index}
            // value={index}
            // title={book.volumeInfo.title}
            // authors={book.volumeInfo.authors}
            // link={book.volumeInfo.infoLink}
            // image={book.volumeInfo.imageLinks.thumbnail}
            // description={book.volumeInfo.description}
            />
       
        </SavedCard> 
      </Container>
    );
  }


export default Saved;