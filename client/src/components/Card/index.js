import React from "react";

function Card() {
  return (
    <>  
     <div className="card mt-5">
     <div className="card-body">
         Book Search
         <input className="form-control form-control-lg mb-2" type="text" placeholder="book title"/>
         <button type="submit" className="btn btn-primary float-right">Search</button></div>
         </div>
        <div className="card mt-5">
           

        <div className="card-body">
            Results
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h2>Matilda (Colour Edition)</h2>
                <p>Written by Roald Dahl</p>
                <a href="https://play.google.com/store/books/details?id=P6D7DAAAQBAJ&source=gbs_api">https://play.google.com/store/books/details?id=P6D7DAAAQBAJ&source=gbs_api</a>
                <div className="row">
                    <div className="col-md-2">
                <img className="" alt="book" src="http://books.google.com/books/content?id=P6D7DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>
                </div>
                <div className="col-md-10">
                <p className="float-right">Roald Dahl's much-loved Matilda, now with Quentin Blake's original illustrations in full colour. Matilda Wormwood's father thinks she's a little scab. Matilda's mother spends all afternoon playing bingo. And Matilda's headmistress Miss Trunchbull? Well, she's the worst of all. She is a big bully, who thinks all her pupils are rotten and locks them in the dreaded Chokey. As for Matilda, she's an extraordinary little girl with a magical mind - and now she's had enough. So all these grown-ups had better watch out, because Matilda is going to teach them a lesson they'll never forget. Matilda is also a phenomenally successful, award-winning London stage musical, adapted for the stage by Dennis Kelly with music by Tim Minchin. 'A true genius . . . Roald Dahl is my hero' - David Walliams Look out for new Roald Dahl apps in the App store and Google Play- including the disgusting TWIT OR MISS! inspired by the revolting Twits.</p></div></div></li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>
        </>
  );
}

export default Card;