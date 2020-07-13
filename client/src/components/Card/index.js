import React from "react";

export function Card(props) {
  return (
    <>  
     <div className="card mt-3 mb-3">
     <div className="card-body">
         Book Search
         <input className="form-control form-control-lg mb-2" value={props.enteredText} type="text" placeholder="book title" onChange={props.inputText} />
         <button type="submit" className="btn btn-primary float-right" onClick={props.search}>Search</button></div>
         </div>
        <div className="card mt-5">
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
                <p>{props.authors}<button value={props.value} className="float-right" onClick={props.saveButton}>Save</button></p>
                <a href={props.link}>{props.link}</a>
                <div className="row mt-3 mb-3">
                    <div className="col-md-2">
                <img className="" alt="book" src={props.image}/>
                </div>
                <div className="col-md-10">
                <p className="float-right">{props.description}</p></div></div></li>
                </>

);
}

