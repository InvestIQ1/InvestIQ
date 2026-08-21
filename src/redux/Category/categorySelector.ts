import type { RootState } from "../store";

export const selectCategory = (state: RootState) =>
  state.category.category;

