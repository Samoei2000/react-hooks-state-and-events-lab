import React, { useState } from "react";

function Item({ name, category }) {
  // Step 2: Create a state variable for cart status
  const [inCart, setInCart] = useState(false);

  // Step 3: Handle button click to toggle cart status
  const handleCartToggle = () => {
    setInCart(prevInCart => !prevInCart);
  };

  // Step 4: Update className and button text based on cart status
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
