import React from "react";
import CallToAction from "./CallToAction";

import homepageHero from "./Images/HomepageHero.jpg";

function Home() {
  return (
    <div
      className="homepageDiv"
      style={{
        backgroundImage: `url(${homepageHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        marginTop: "20px",
      }}
    >
      <h1 className="HomepageH1">
        A sample Ecommerce <br />
        Store built in React.js
      </h1>
      <CallToAction />
      <h2 className="HomepageH2">
        Developed by <br />
        Steve Glick
        <br />{" "}
        <a
          href="https://heysteve.dev/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          HeySteve.Dev
        </a>
      </h2>
    </div>
  );
}

export default Home;
