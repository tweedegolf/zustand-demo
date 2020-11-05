import React, { useRef, useEffect } from "react";
import { store } from "../redux/store";

export function FormFieldR2({ onChange, storeKey, initialValue }) {
  const ref = useRef<HTMLInputElement>();

  let localState: number = initialValue;
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      if (ref.current) {
        const value = store.getState()[storeKey];
        if (value !== localState) {
          localState = value;
          ref.current.value = `${localState * 3}`;
        }
      }
    });
    return () => {
      unsubscribe();
    };
  });

  console.log("render FormFieldR2");

  return (
    <div className="input-row">
      <input ref={ref} type="number" value={localState * 3} onChange={onChange} />
    </div>
  );
}
