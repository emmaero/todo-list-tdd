import { useState } from "react";
import { useList } from "../../states/ListProvider";
import InputField from "../customInput/InputField";
import formData from "../../data/formData.json";

export default function AddItemForm() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const {dispatch } = useList();
  function submitHandler() {
    const inputItem = createItem(productName, price);
    dispatch({ type: "addItem", inputItem });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-item-wrapper">
        <div className="new-item-container">
          <div className="new-item-content"></div>
          <InputField
            hook={[productName, setProductName]}
            HTMLParameter={formData.name}
          >
            Product Name
          </InputField>
          <InputField hook={[price, setPrice]} HTMLParameter={formData.price}>
            Price
          </InputField>
          <div className="add-item-button-container">
            <button type="submit" className="add-item btn">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  function createItem(name, price) {
    return {
      name: name,
      price: price,
      id: Math.random().toString(),
      acquired: false,
    };
  }
}
