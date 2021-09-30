import { sortByName, sortByPrice } from "./sorter";

test("Should sort by product name", () => {
  const fakeListItem = [
    { name: "yayya", price: "123", id: "0.9066321790019409" },
    { name: "Mable", price: "9985", id: "0.06154530681604542" },
    { name: "Towel", price: "500", id: "0.4880600809081199" },
  ];
  const result = [
    { name: "yayya", price: "123", id: "0.9066321790019409" },
    { name: "Towel", price: "500", id: "0.4880600809081199" },
    { name: "Mable", price: "9985", id: "0.06154530681604542" },
  ];

  //Act
  const sorted = sortByName(fakeListItem);
  const sortedString = JSON.stringify(sorted);
  const resultString = JSON.stringify(result);

  //Assert
  expect(sortedString).toEqual(resultString);
});
test("Should sort by product price", () => {
  const fakeListItem = [
    { name: "yayya", price: "8888", id: "0.9066321790019409" },
    { name: "Mable", price: "1550", id: "0.06154530681604542" },
    { name: "Towel", price: "123", id: "0.4880600809081199" },
  ];
  const result = [
    { name: "Towel", price: "123", id: "0.4880600809081199" },
    { name: "Mable", price: "1550", id: "0.06154530681604542" },
    { name: "yayya", price: "8888", id: "0.9066321790019409" },
  ];

  //Act
  const sorted = sortByPrice(fakeListItem);
  const sortedString = JSON.stringify(sorted);
  const resultString = JSON.stringify(result);

  //Assert
  expect(sortedString).toEqual(resultString);
});
