import React from "react";
import "./Hero.css";
import robot from "../img/robot.png";
import eplipse2 from "../img/Ellipse 19.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

function Hero() {
  return (
    <div className="hero__fullbody">
      <div className="hero container">
        <div className="row hero__row">
          <div className="col-12 col-lg-6 hero__robot">
            <div className="hero__imge">
              <img className="hero__imgRobot" src={robot} alt="hero__img" />
              <div className="balsal">
                <button className="btn-gradO">https://nfts.bio/Joe </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 hero__articalsocial">
            <div className="hero__text">
              <h1>NFTs Bio Link</h1>
              <h3>One link to show 'em all</h3>
              <p>
                NFTs bio is the only link you need.
                <br /> Stop spamming and start building <br /> your brand with
                one memorable
                <br /> URL. Create a beautiful profile to
                <br /> connect with your audience,
                <br /> showcase the NFT collections, or <br />
                just to show off your favorite
                <br /> collectible. NFTs bio takes less
                <br /> than a minute to setup. It's easy to
                <br /> use, fun to share and free forever!
              </p>
            </div>
            <div className="hero__social">
              <TwitterIcon className="twitter" />
              <TelegramIcon className="telegram" />
              <LinkedInIcon className="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
