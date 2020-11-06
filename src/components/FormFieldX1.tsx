import React, { useRef, useEffect } from "react";
import { state$ } from "../redux/store";
import { distinctUntilKeyChanged, pluck } from "rxjs/operators";

export function FormFieldX1({ onChange, storeKey, initialValue }) {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    const sub = state$
      .pipe(distinctUntilKeyChanged(storeKey), pluck(storeKey))
      .subscribe((v: number) => {
        if (ref.current) {
          ref.current.value = `${v * 4}`;
          console.log("RxJs");
        }
      });
    return () => {
      sub.unsubscribe();
    };
  });

  console.log("render FormFieldX1");

  return (
    <div className="input-row">
      <input ref={ref} type="number" onChange={onChange} defaultValue={initialValue * 4} />
    </div>
  );
}
