export function sortByName(itemList) {
  const storedList = [...itemList].sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    return x > y ? -1 : 1;
  });
  return storedList;
}
export function sortByPrice(itemList) {
  const storedList = [...itemList].sort((x, y) => {
    return x.price - y.price;
  });
  return storedList;
}
