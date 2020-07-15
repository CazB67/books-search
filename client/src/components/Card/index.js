import React from "react";

export function Card(props) {
  return (
    <>  
     <div className="card mt-3 mb-3">
     <div className="card-body">
         Book Search
         <input className="form-control form-control-lg mb-2" value={props.enteredText} type="text" placeholder="Type in book title" onChange={props.inputText} />
         <button type="submit" className="btn btn-primary float-right" onClick={props.search}>Search</button></div>
         </div>
        <div className={props.visibility}>
        <div className="card-body">
           {props.results} 
        </div>
        <ul className="list-group list-group-flush">
            {props.children}
        </ul>
        </div>
        </>
  );
}

export function ListItem(props) {
    return (<>
                
                <li className="list-group-item" value={props.value}>
                <h2>{props.title}</h2>
                {props.children}
                <p>{props.authors}<button value={props.value} className="float-right" onClick={props.saveButton} toggle={props.toggle}>Save</button></p>
                <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
                <div className="row mt-3 mb-3">
                    <div className="col-md-3">
                <img className="" alt="book" src={props.image}/>
                </div>
                <div className="col-md-9">
                <p className="float-right">{props.description}</p></div></div></li>
                </>

);
}

