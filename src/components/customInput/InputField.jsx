import React, { useEffect, useState } from "react";

export default function InputField({ children, hook, HTMLParameter }) {
  const [state, setState] = hook;

  return (
    <>
      <div>
        <label>{children} </label>

        <input
          className="form-input"
          onChange={(event) => setState(event.target.value)}
          {...HTMLParameter}
        />
      </div>
    </>
  );
}
