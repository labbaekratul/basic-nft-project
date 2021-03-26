import React from "react";
import kitty from "../img/un3.png";
import "./About.css";

function About() {
  return (
    <div className="about container">
      <div className="row  about__row">
        <div className="col-12 col-lg-6 about__kittyimg">
          <img className="kitty__img" src={kitty} />
          <div className="kitty__imgInfo">
            <span>Criptokitties</span>
            <p>My nam Jeff</p>
          </div>
        </div>
        <div className="col-12 col-lg-6 about__artical">
          <h1>NFT Social Link</h1>
          <p>
            NFTs bio is the only link you need.
            <br /> Stop spamming and start building <br /> your brand with one
            memorable
            <br /> URL. Create a beautiful profile to
            <br /> connect with your audience,
            <br /> showcase the NFT collections, or <br />
            just to show off your favorite
            <br /> collectible. NFTs bio takes less
            <br /> than a minute to setup. It's easy to
            <br /> use, fun to share and free forever!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
