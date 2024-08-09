import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 2: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 3: Update appClass based on the state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 4: Toggle dark mode state when button is clicked
  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add event handler to the button */}
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
