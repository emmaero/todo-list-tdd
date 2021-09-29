import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ModalContainer from "../ModalContainer";

export default function AddItemButton() {
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <button
        onClick={() =>
          setShowModal(<AddItemForm setShowModal={setShowModal} />)
        }
        className="btn"
      >
        Add Item
      </button>
      <ModalContainer showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
