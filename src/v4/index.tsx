import "../styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { store } from "../redux/store";
import { FormFieldR0 } from "../components/FormFieldR0";
import { FormFieldX1 } from "../components/FormFieldX1";
import { SET_FIELD, SET_FIELD_1 } from "../constants";

const onChange = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).valueAsNumber;
  store.dispatch({ type: SET_FIELD, payload: { value } });
};

render(
  <>
    <FormFieldR0 onChange={onChange} value={store.getState().field} />
    <FormFieldX1 onChange={onChange} initialValue={store.getState().field} storeKey="field" />
  </>,
  document.getElementById("app")
);

let v = 0;
setInterval(() => {
  store.dispatch({ type: SET_FIELD_1, payload: { value: v++ } });
}, 2000);
