  export default function createItem(name, price) {
    return {
      name: name,
      price: price,
      id: Math.random().toString(),
      acquired: false,
    };
  }
