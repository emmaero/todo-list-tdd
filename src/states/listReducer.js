export default function listReducer(list, action) {
  switch (action.type) {
    case "addItem":
      return addItem(list, action);
    case "updateList":
      return updateList(list, action);
    case "sort":
      return sortList(action);
    default:
      return new Error("Unhandled action " + action.type);
  }
}
function addItem(list, action) {
  const { inputItem } = action;
  if (inputItem !== null) return [...list, inputItem];
}
function updateList(list, action) {
  const { updatedItem } = action;
  const index = list.findIndex((listItem) => listItem.id === updatedItem.id);
  const storedList = [...list];
  storedList[index] = updatedItem;

  return storedList;
}
function sortList(action) {
  const { sortedList } = action;
  return sortedList;
}
