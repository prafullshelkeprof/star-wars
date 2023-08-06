import { People } from "../types/api-types";

import { fetchPeopleAPI, fetchPersonAPI } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPeopleThunk = createAsyncThunk('apiData/fetchPeople', async () => {
  try {
    const response = await fetchPeopleAPI();
    return response.data.results as People[];
  } catch (error) {
    throw new Error('Error fetching people data.');
  }
});
const fetchPersonByIdThunk = createAsyncThunk('apiData/fetchPersonById', async (id: string) => {
  try {
    const response = await fetchPersonAPI(id);
    return response.data as People;
  } catch (error) {
    throw new Error('Error fetching person data.');
  }
});

export {
  fetchPeopleThunk,
  fetchPersonByIdThunk
}