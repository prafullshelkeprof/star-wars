import { RootState } from "../store";
import { Film } from "../types/api-types";

const selectFilms = (state: RootState): Film[] => state.app.films;
const selectLoading = (state: RootState): boolean => state.app.loading;

export {
  selectFilms,
  selectLoading
}