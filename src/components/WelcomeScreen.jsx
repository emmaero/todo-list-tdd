import React from "react";
import illustration from "../assets/Illustration/undraw_empty_cart.svg";
import AddItemButton from "./createItem/AddItemButton";
export default function WelcomeScreen() {
  return (
    <div>
      <div className="illustration">
        <img src={illustration} alt="" />
      </div>
      <p className="welcome-text">
        Welcome to EIKA, thank for using this application. To add item to your
        shopping list, click the button “Add item” below.
          </p>
          <AddItemButton/>
    </div>
  );
}
