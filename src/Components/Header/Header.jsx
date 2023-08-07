import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft">
          <h1 className="headerLeftTitle">Make</h1>
          <h1 className="headerLeftTitle">remote work</h1>
          <h1 className="headerLeftTitleMobile">Make remote work</h1>
          <p className="headerLeftDesc">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="headerLeftButton">Learn more</button>
          <div className="headerBottom">
            <img
              src="images/client-databiz.svg"
              alt="databizLogo"
              className="headerCompany"
            />
            <img
              src="images/client-audiophile.svg"
              alt="audiophileLogo"
              className="headerCompany"
            />
            <img
              src="images/client-meet.svg"
              alt="meetLogo"
              className="headerCompany"
            />
            <img
              src="images/client-maker.svg"
              alt="makerLogo"
              className="headerCompany"
            />
          </div>
        </div>
        <div className="headerRight">
          <img
            src="images/image-hero-desktop.png"
            alt="headerRightHero"
            className="headerRightImg"
          />
          <img
            src="images/image-hero-mobile.png"
            alt="headerRightHero"
            className="headerRightHeroMobile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
