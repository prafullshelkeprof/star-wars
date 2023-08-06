import { RootState } from "../store";
import { Species } from "../types/api-types";

const selectSpecies = (state: RootState): Species[] => state.app.species;
export { selectSpecies }
