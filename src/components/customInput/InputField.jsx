import React from "react";

export default function InputField({ children, hook, HTMLParameter }) {
  const [state, setState] = hook;
  return (
    <>
      <label>{children} </label>

      <input
        className="form-input"
        onChange={(event) => setState(event.target.value)}
        {...HTMLParameter}
      />
    </>
  );
}
