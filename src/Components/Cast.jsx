import React from "react";
import Nav from "./Nav";
import PromImage from "../assets/PromImage.jpg"

const Cast = () => {
  return (
    <div>
      <Nav />
      
      <h1 className="header__thanks">Special Thanks To All Our Sponsors Who Make This Possible</h1>
      <div className="sponsor__wrapper">
        <figure className="img__promo">
          <img className="promo__img" src={PromImage} />
        </figure>
        <p className="sponsor__thanks">
          The Blackrock Bloomsday Committee sincerely thanks Niamh Grist and
          Michael Hayes of Blackrock Village Centre and the wonderful Blackrock
          community. We are extremely grateful for the financial and moral support
          extended by Fáilte Ireland, DLRCOCO, the James Joyce Centre, Zurich Life
          Assurance plc, the Blackrock Business Network, Tim Lloyd of Abbey
          Badges, Aidan Fitzgerald, Onyx Bags, Lisa Perkins, PetStop, SuperValu,
          Regan Law, Dubray Books, Blackrock Dental, Advance Hearing, Blackrock
          Cellar, Conways, Writers’ Tears, Rockcourt Medical Centre, John Dunne of
          LHW, Khan, Halcyon Properties, Monkstown Laser Skin Clinic, Janet
          Carroll, Helen McAlinden, Fran and Jane, Slow Street Boutique, Raven
          Books, The Trigger Fish Cookshop, Nordic Elements, Jane Carroll, The
          Optical Shop, Fujifilm, Homecare DIY, Executive Dry Cleaners, Centra,
          Blackrock Family Practice, Quigley’s Pharmacy, Budget Event Hire, Marita
          Gorman, Judith Woodworth, Adrian and Sandie Isherwood, Tom Kavanagh,
          Catarina Koch, Joe and Ester Crilly, The Idrone Terrace Residents
          Association and Éanna Mulloy.
        </p>
      </div>
      <p className="credits">
        Adapted by Nastaise Leddy and Iris Park
        <br />
        Theme Music: ‘All the Ghosts of Ulysses’ composed by Aidan Mulloy
        <br />
        Choreographed by Orla McFeely
        <br />
        Music directed by Aidan Mulloy
        <br />
        Directed by Nastaise Leddy
      </p>
    </div>
    
  );
};

export default Cast;
