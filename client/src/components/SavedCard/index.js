import React from "react";

export function SavedCard(props) {
  return (
    <>  
     
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

export function SavedListItem(props) {
    return (<>
                <li className="list-group-item"value={props.value}>
                <h2>Fantastic Beasts and Where to Find Them</h2>
                <p>J.K. Rowling", "Newt Scamander<button value={props.value} className="float-right" onClick={props.deleteButton}>Delete</button></p>
                <a href="https://play.google.com/store/books/details?id=ASImDQAAQBAJ&source=gbs_api">https://play.google.com/store/books/details?id=ASImDQAAQBAJ&source=gbs_api</a>
                <div className="row mt-3 mb-3">
                    <div className="col-md-2">
                <img className="" alt="book" src="http://books.google.com/books/content?id=ASImDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>
                </div>
                <div className="col-md-10">
                <p className="float-right">The 2017 edition of this essential companion to the Harry Potter stories included a new foreword from J.K. Rowling (writing as Newt Scamander) and 6 new beasts! A set textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world. Scamander's years of travel and research have created a tome of unparalleled importance. Some of the beasts will be familiar to readers of the Harry Potter books - the Hippogriff, the Basilisk, the Hungarian Horntail... Others will surprise even the most ardent amateur Magizoologist. Dip in to discover the curious habits of magical beasts across five continents... At least 15% of the net retail price* of this eBook will be available to Comic Relief and Lumos Foundation for their work with children and young people to help them have a better life. 20% of these monies will be used by Comic Relief and 80% will be used by Lumos Foundation. * The net retail price means the price paid by the consumer less applicable sales taxes Comic Relief is a registered charity in the UK with charity nos. 326568 (England/Wales) and SC039730 (Scotland). Lumos Foundation is a registered charity in the UK with no. 1112575. Please note: This is the 2017 edition of the Hogwarts Library ebook, featuring bespoke cover artwork from Olly Moss and a new foreword from J.K. Rowling. The official screenplay of the 2016 Warner Bros. movie - Fantastic Beasts and Where to Find Them: The Original Screenplay - is available separately.</p></div></div></li>

                <li className="list-group-item"value={props.value}>
                <h2>{props.title}</h2>
                <p>{props.authors}<button value={props.value} className="float-right" onClick={props.deleteButton}>Delete</button></p>
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
