import { RootState } from "../store";
import { People } from "../types/api-types";

const selectPeople = (state: RootState): People[] => state.app.people;
export { selectPeople };
