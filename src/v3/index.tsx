import "../styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { FormFieldR0 } from "../components/FormFieldR0";
import { FormFieldR1 } from "../components/FormFieldR1";
import { FormFieldR2 } from "../components/FormFieldR2";
import { SET_FIELD } from "../constants";

const onChange = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).valueAsNumber;
  store.dispatch({ type: SET_FIELD, payload: { value } });
};

render(
  <>
    <FormFieldR0 onChange={onChange} value={store.getState().field} />
    <Provider store={store}>
      <FormFieldR1 onChange={onChange} storeKey="field" />
    </Provider>
    <FormFieldR2 onChange={onChange} initialValue={store.getState().field} storeKey="field" />
  </>,
  document.getElementById("app")
);
