import { createSlice } from '@reduxjs/toolkit';
import { People, Film, Species } from './types/api-types';
import { fetchFilmsThunk, fetchFilmByIdThunk } from './actions/fetch-films';
import { fetchPeopleThunk, fetchPersonByIdThunk } from './actions/fetch-people';
import { fetchSpeciesThunk, fetchSpeciesByIdThunk } from './actions/fetch-species';


interface AppState {
  films: Film[];
  people: People[];
  species: Species[];
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  films: [],
  people: [],
  species: [],
  loading: false,
  error: null,
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilmsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.films = action.payload;
      })
      .addCase(fetchFilmsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching films data.';
      })
      .addCase(fetchFilmByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilmByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.films.push(action.payload);
      })
      .addCase(fetchFilmByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching film data.';
      })
      .addCase(fetchPeopleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeopleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.people = action.payload;
      })
      .addCase(fetchPeopleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching people data.';
      })
      .addCase(fetchPersonByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.people.push(action.payload);
      })
      .addCase(fetchPersonByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching person data.';
      })
      .addCase(fetchSpeciesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpeciesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.species = action.payload;
      })
      .addCase(fetchSpeciesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching species data.';
      })
      .addCase(fetchSpeciesByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpeciesByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.species.push(action.payload);
      })
      .addCase(fetchSpeciesByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching species data.';
      });
  },
});


export const appReducer = appSlice.reducer;
