import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";

export function FormFieldR1({ onChange, storeKey }) {
  const value = useSelector((state: RootState) => state[storeKey] as number);

  console.log("render FormFieldR1");

  return (
    <div className="input-row">
      <input type="number" value={value * 2} onChange={onChange} />
    </div>
  );
}
