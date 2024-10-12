import React from "react";

const Totals = ({ totalItems, uniqueItems, duplicateItems }) => {
  //let itemsArray = JSON.parse(duplicateItems);
  //let itemCounter = 0;
  let subT = 0;

  // Iterate over the unique items array and add the items price to the subTotal
  uniqueItems.forEach((element) => {
    console.log(element.price + " elemnt price");
    subT = subT + element.price;
  });
  // Iterate over the duplicate items array and add the items price to the subTotal
  duplicateItems.forEach((element) => {
    subT = subT + element.price;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let priceInDollars = formatter.format(subT);

  return (
    <div>
      Items in cart {totalItems} &nbsp; Sub Total: {priceInDollars}
    </div>
  );
};

export default Totals;
