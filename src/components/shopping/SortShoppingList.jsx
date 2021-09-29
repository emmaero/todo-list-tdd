import React from "react";
import styles from "../../styles/style.module.css";
import { sortByName, sortByPrice } from "../../scripts/sorter";
import { useList } from "../../states/ListProvider";

export default function SortShoppingList() {
  const { list, dispatch } = useList();

  function sortNameHandler() {
    const sortedList = sortByName(list);
    dispatch({ type: "sort", sortedList });
  }
  function sortPriceHandler() {
    const sortedList = sortByPrice(list);
    dispatch({ type: "sort", sortedList });
  }
  return (
    <div className="sort-wrapper">
      <div className="sort-title">Sort by:</div>
      <button
        className="sort-button"
        value="name"
        onClick={() => sortNameHandler()}
      >
        Name
      </button>
      <button
        className="sort-button"
        value="price"
        onClick={() => sortPriceHandler()}
      >
        Price
      </button>
    </div>
  );
}
