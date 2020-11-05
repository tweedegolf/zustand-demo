import React from "react";
import { useZustandStore } from "../zustand_store";

export function FormFieldZ1({ onChange, storeKey }) {
  const value = useZustandStore(state => state[storeKey] as number);

  console.log("render FormFieldZ1");

  return (
    <div className="input-row">
      <input step="any" type="number" onChange={onChange} value={value * 3} />
    </div>
  );
}
