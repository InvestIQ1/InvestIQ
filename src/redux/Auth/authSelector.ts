import type { user } from "../../types/types";
export const userSelector = (state: { auth: { user: user | null } }) => state.auth.user;