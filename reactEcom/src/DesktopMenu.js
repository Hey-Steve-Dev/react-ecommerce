import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

// ItemImage component to display the item image
const DesktopMenu = ({ cartItems }) => {
  return (
    <ul className="desktopMenu">
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/cart">
          {" "}
          <FaShoppingBasket />
        </Link>
      </li>
      <CartBadge cartItems={cartItems} />
    </ul>
  );
};

export default DesktopMenu;
