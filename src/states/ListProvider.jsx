//NPM files
import React, { useContext, useEffect, useReducer } from "react";
//project files
import STORAGE_KEY from "../scripts/storageKey";
import listReducer from "./listReducer";

const ListContext = React.createContext(null);
export function ListProvider(props) {
  // Global state
  const [list, dispatch] = useReducer(listReducer, loadList(STORAGE_KEY));

  // Methods
  useEffect(() => saveList(STORAGE_KEY, list), [list]);
  return (
    <ListContext.Provider value={{ list, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
}
export function useList() {
  const context = useContext(ListContext);

  return context;
}

function loadList(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

function saveList(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}
