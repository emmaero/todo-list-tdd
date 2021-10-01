import React, { useEffect, useState } from "react";

export default function InputField({ children, hook, HTMLParameter }) {
  const [state, setState] = hook;
  const [isValidInput, setIsValidInput] = useState(false);
  function setInputState(event) {
    setState((prev) => event.target.value);
    setIsValidInput(state.trim() === "" ? true : false);
  }
  return (
    <>
      <div>
        <label>{children} </label>

        <input
          className="form-input"
          onChange={(event) => setInputState(event)}
          {...HTMLParameter}
        />
        {isValidInput && <p>invalid input</p>}
      </div>
    </>
  );
}
