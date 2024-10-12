import React from "react";

const Price = ({ item }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let priceInDollars = formatter.format(item.price);

  return <div>{priceInDollars}</div>;
};

export default Price;
