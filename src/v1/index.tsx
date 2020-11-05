import "../styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { store } from "../redux/store";
import { FormFieldR0 } from "../components/FormFieldR0";
import { SET_FIELD } from "../constants";

render(
  <>
    <FormFieldR0
      onChange={(e: InputEvent) => {
        const value = (e.target as HTMLInputElement).valueAsNumber;
        store.dispatch({ type: SET_FIELD, payload: { value } });
      }}
      value={store.getState().field}
    />
  </>,
  document.getElementById("app")
);
