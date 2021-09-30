import React, { useState } from "react";
import { useList } from "../../states/ListProvider";
import ShoppingItem from "./ShoppingItem";
import AddItemButton from "../createItem/AddItemButton";
import ListToggledDisplayButton from "./ListToggledDisplayButton";
import SortShoppingList from "./SortShoppingList";

export default function ShoppingScreen() {
  const [acquired, setAcquired] = useState(true);
  const { list, dispatch } = useList();
  const updateList = (item) => {
    const updatedItem = { ...item, acquired: !item.acquired };
    dispatch({ type: "updateList", updatedItem });
  };

  const filteredList = acquired
    ? list.filter((item) => item.acquired === false)
    : list.filter((item) => item.acquired === true);
  const items = filteredList.map((item) => (
    <ShoppingItem
      key={item.id}
      name={item.name.toUpperCase()}
      price={item.price}
      acquired={item.acquired}
      onAcquired={() => updateList(item)}
    />
  ));
  const emptyMessage = acquired ? (
    <p className="center-align-text">No new item in the list to be completed</p>
  ) : (
    <p className="center-align-text">No completed item in the list</p>
  );
  return (
    <>
      <h2>Eika shopping list</h2>
      <SortShoppingList />
      <div className="item-list">
        <h3 className="center-align-text">
          {acquired ? "Showing uncompleted list" : "Showing completed list"}
        </h3>
        {items.length > 0 ? items : emptyMessage}
      </div>
      <AddItemButton />
      <ListToggledDisplayButton
        acquiredStatus={acquired}
        onShowList={() => {
          setAcquired(!acquired);
        }}
      />
    </>
  );
}
