import React from "react";

export function SavedCard(props) {
  return (
      <>  
        <div className="card mt-3 mb-3">
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

export function SavedListItem(props) {
    return (
                <>
                <li className="list-group-item"value={props.value}>
                  <h2>{props.title}</h2>
                  <p>{props.authors}</p>
                  <button value={props.value} className="float-right" onClick={props.deleteButton}>Delete</button>
                  <a href={props.link} rel="noopener noreferrer" target="_blank">More Info</a>
                  <div className="row mt-3 mb-3">
                      <div className="col-md-2">
                        <img className="" alt="book" src={props.image}/>
                      </div>
                      <div className="col-md-10">
                        <p className="float-right">{props.description}</p>
                      </div>
                  </div>
                </li>
                </>
);
}
