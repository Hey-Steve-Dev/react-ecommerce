import React from "react";
import Board from "./Board";
import SearchForm from "./SearchForm";

function Shop({ items, cartItems, setCartItems, search, setSearch }) {
  // Filter items based on search query

  const filteredItems =
    search.trim() === ""
      ? items
      : items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <h1 className="shopPageH1">
        The product information is fetched from{" "}
        <a
          href="https://fakestoreapi.com/products/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          FakeStore API
        </a>
      </h1>
      <div>
        <Board
          items={filteredItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
    </>
  );
}

export default Shop;
