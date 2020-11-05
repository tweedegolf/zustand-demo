import React from "react";

export function FormFieldR0({ onChange, value }) {
  console.log("render FormFieldR0");

  return (
    <div className="input-row">
      <input
        className="form-control"
        type="number"
        step="any"
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
