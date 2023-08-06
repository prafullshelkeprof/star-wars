// src/api/api.ts

import axios from 'axios';
import { API_BASE_URL } from './api-config';

export const fetchFilmsAPI = () => {
  return axios.get(`${API_BASE_URL}/films/`);
};

export const fetchFilmAPI = (id: string) => {
  return axios.get(`${API_BASE_URL}/films/${id}/`);
};

export const fetchPeopleAPI = () => {
  return axios.get(`${API_BASE_URL}/people/`);
};

export const fetchPersonAPI = (id: string) => {
  return axios.get(`${API_BASE_URL}/people/${id}/`);
};

export const fetchSpeciesAPI = () => {
  return axios.get(`${API_BASE_URL}/species/`);
};

export const fetchSpeciesByIdAPI = (id: string) => {
  return axios.get(`${API_BASE_URL}/species/${id}/`);
};
