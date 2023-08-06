import type { Species } from "../types/api-types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSpeciesAPI, fetchSpeciesByIdAPI } from "../api";

const fetchSpeciesThunk = createAsyncThunk('apiData/fetchSpecies', async () => {
  try {
    const response = await fetchSpeciesAPI();
    return response.data.results as Species[];
  } catch (error) {
    throw new Error('Error fetching species data.');
  }
});
const fetchSpeciesByIdThunk = createAsyncThunk('apiData/fetchSpeciesById', async (id: string) => {
  try {
    const response = await fetchSpeciesByIdAPI(id);
    return response.data as Species;
  } catch (error) {
    throw new Error('Error fetching species data.');
  }
});
export { fetchSpeciesThunk, fetchSpeciesByIdThunk };
