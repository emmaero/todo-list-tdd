import React from "react";

export default function ShoppingItem(props) {
  const { acquired, onAcquired, name, price } = props;
  return (
    <div className="item">
      <div className="item-bag">
        <div className="item-checkbox-section">
          <input
            data-testid="checkbox"
            className="input-checkbox"
            type="checkbox"
            checked={acquired}
            onChange={onAcquired}
          />
        </div>

        <p>{name}</p>
        <p className="item-price">
          {price}
          <span>:-</span>
        </p>
      </div>
    </div>
  );
}
