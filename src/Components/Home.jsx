import React from "react";
import Nav from "./Nav";
import PromoPhoto from "../assets/Promo photo.jpg"

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="sponsors">
          <figure>
            <img className="promo__photo" src={PromoPhoto} />
          </figure>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;
