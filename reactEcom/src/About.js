import React from "react";

function About() {
  return (
    <div className="aboutPage">
      <h1>React.js Showcase</h1>
      <p>
        This site is designed to showcase my skills in React.js, with a few
        standout features that highlight its versatility and performance.
      </p>
      <br />
      <h2>Incremental Search (Hot Search)</h2>
      <p>
        This feature allows users to get real-time search results as they type.
        As soon as a user begins entering a query, relevant items appear
        instantly without needing to reload the page. This improves the browsing
        experience by making it faster and more responsive.
      </p>
      <br />
      <h2>Reactful Shopping Cart</h2>
      <p>
        The shopping cart updates dynamically. Every time you add or remove an
        item, the cart reflects changes immediately without refreshing the page,
        providing a smooth and uninterrupted shopping experience.
      </p>
      <br />
      <h2>Mobile Menu</h2>
      <p>
        The mobile menu is intuitive and user-friendly. It’s designed to be
        unobtrusive, so it doesn’t block the screen when active. Users can
        easily navigate without being overwhelmed by the menu overlay, ensuring
        the mobile experience feels seamless.
      </p>
      <br />
      <p>
        This project highlights the efficiency of React in delivering fast,
        interactive, and user-centric web applications.
      </p>
      <h2>API-Powered Product Data</h2>
      <p>
        One of the key features of this site is the use of an external API to
        populate the product data dynamically. The product information is
        fetched from{" "}
        <a
          href="https://fakestoreapi.com/products/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          FakeStore API
        </a>
        , providing a wide variety of sample products to showcase the
        functionality of the e-commerce platform.
      </p>
      <p>
        This integration allows for real-time data updates, ensuring that the
        site is always displaying the most current product information available
        from the API. It demonstrates how React seamlessly interacts with APIs
        to deliver fresh content without requiring manual updates.
      </p>
    </div>
  );
}

export default About;
