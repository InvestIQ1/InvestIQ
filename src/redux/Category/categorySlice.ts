import { createSlice } from "@reduxjs/toolkit";

interface State {
  category: string;
}

const initialState: State = {
  category: "",
};

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    changeCategory: {
      reducer(state: State, action: { payload: string }) {
        state.category = action.payload;
      },

      prepare(text: string) {
        console.log(text);
        return {
          payload: text,
        };
      },
    },
  },
});

export const { changeCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
