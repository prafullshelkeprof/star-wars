import { Film } from "../types/api-types";
import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchFilmAPI, fetchFilmsAPI } from "../api";


const fetchFilmsThunk = createAsyncThunk('apiData/fetchFilms', async () => {
  try {
    const response = await fetchFilmsAPI();
    return response.data.results as Film[];
  } catch (error) {
    throw new Error('Error fetching films data.');
  }
});

const fetchFilmByIdThunk = createAsyncThunk('apiData/fetchFilmById', async (id: string) => {
  try {
    const response = await fetchFilmAPI(id);
    return response.data as Film;
  } catch (error) {
    throw new Error('Error fetching film data.');
  }
});

export { fetchFilmsThunk, fetchFilmByIdThunk };
