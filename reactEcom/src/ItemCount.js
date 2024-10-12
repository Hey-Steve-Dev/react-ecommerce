import React from "react";

const ItemCount = ({ duplicateItems, item, cartItems, setCartItems }) => {
  //the ItemCount componet is responsible for adding and removing items from the shopping cart

  // Parse the JSON string back into an array
  let itemsArray = JSON.parse(duplicateItems);

  // item counter is used below to display the count of the items
  let itemCounter = 0;

  // Iterate over the array to count items
  itemsArray.forEach((element) => {
    element.id === item.id ? itemCounter++ : (itemCounter = itemCounter);
  });

  // Retrieve existing items from local storage or initialize an empty array
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const addItem = () => {
    cartItems.push(item);

    // Store the updated items array back to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setCartItems(cartItems);
  };

  const removeItem = () => {
    let count = 0;
    let itemToDelete;
    cartItems.forEach((element) => {
      element.id === item.id
        ? (itemToDelete = count)
        : (itemToDelete = itemToDelete);
      count++;
    });

    cartItems.splice(itemToDelete, 1);
    //cartItems = cartItems.filter(element => element !== item);

    // Store the updated items array back to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // set the state of cartItems
    setCartItems(cartItems);
  };

  return (
    <div>
      Quantity
      <div className="buttonRow">
        <button onClick={removeItem} className="downButton">
          -
        </button>
        <div className="itemCounter">{itemCounter + 1}</div>
        <button onClick={addItem} className="upButton">
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
