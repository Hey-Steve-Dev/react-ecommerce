import React from "react";
import CallToAction from "./CallToAction";

import homepageHero from "./Images/HomepageHero.jpg";

function Home() {
  const currentYear = new Date().getFullYear();

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
          HeySteve.Dev <br />
          <p>© {currentYear} Hey-Steve-Dev</p>
        </a>
      </h2>
    </div>
  );
}

export default Home;
