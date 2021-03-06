import "../styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { store } from "../redux/store";
import { FormFieldR0 } from "../components/FormFieldR0";
import { FormFieldZ1 } from "../components/FormFieldZ1";
import { FormFieldZ2 } from "../components/FormFieldZ2";
import { SET_FIELD } from "../constants";
import { useZustandStore } from "../zustand_store";

const onChange = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).valueAsNumber;
  store.dispatch({ type: SET_FIELD, payload: { value } });
  // useZustandStore.setState({ field: value });
  useZustandStore.getState().setField2(value);
};

useZustandStore.setState(store.getState());

render(
  <>
    <FormFieldR0 onChange={onChange} value={store.getState().field} />
    <FormFieldZ1 onChange={onChange} storeKey="field" />
    <FormFieldZ2
      onChange={onChange}
      storeKey="field"
      initialValue={useZustandStore.getState().field}
    />
  </>,
  document.getElementById("app")
);
