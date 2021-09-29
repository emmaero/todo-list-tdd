import React from "react";

export default function ListToggledDisplayButton(props) {
    const { onShowList, acquiredStatus } = props;
  const completed = "View completed items";
  const unComplete = "View items";
  return (
    <>
      <button className="view-complete" onClick={onShowList}>
        {acquiredStatus ? completed : unComplete}
      </button>
    </>
  );
}
