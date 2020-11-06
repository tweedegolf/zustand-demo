import { RootState } from "../types";
import { RESIZE, SET_FIELD, SET_FIELD_1 } from "../constants";

export const rootReducer = (
  state: RootState,
  action: { type: string; payload: { [id: string]: any } }
): RootState => {
  if (action.type === RESIZE) {
    const { width, height } = action.payload;
    return {
      ...state,
      width,
      height,
    };
  } else if (action.type === SET_FIELD) {
    const { value } = action.payload;
    return {
      ...state,
      field: value,
    };
  } else if (action.type === SET_FIELD_1) {
    const { value } = action.payload;
    return {
      ...state,
      field1: value,
    };
  }

  return state;
};
