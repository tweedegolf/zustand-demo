import React, { useRef, useEffect } from "react";
import { useZustandStore } from "../zustand_store";
import { RootState } from "../types";

export function FormFieldZ2({ onChange, storeKey, initialValue }) {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    const unsubscribe = useZustandStore.subscribe(
      (v: number) => {
        if (ref.current) {
          ref.current.value = `${v * 4}`;
        }
      },
      (state: RootState) => state[storeKey]
    );
    return () => {
      unsubscribe();
    };
  });

  console.log("render FormFieldZ2");

  return (
    <div className="input-row">
      <input ref={ref} type="number" onChange={onChange} defaultValue={initialValue * 4} />
    </div>
  );
}
