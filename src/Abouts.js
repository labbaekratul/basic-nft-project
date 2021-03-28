import React from "react";
import NavBar from "./NavBar";
import "./About.css";
function Abouts() {
  return (
    <div className="about">
      <NavBar />
      <div className="container about__container">
        <div className="about__artical ">
          <h1>NFT Social Link</h1>
          <p>
            NFTs bio is the only link you need. Stop spamming and start building
            your brand with one memorable URL. Create a beautiful profile to
            connect with your audience, showcase the NFT collections, or just to
            show off your favorite collectible. NFTs bio takes less than a
            minute to setup. It's easy to use, fun to share and free forever!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
