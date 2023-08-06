import { Film, People, Species } from './api-types';

enum AppActionTypes {
  FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS",
  FETCH_PEOPLE_ERROR = "FETCH_PEOPLE_ERROR",
  FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS",
  FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR",
  FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS",
  FETCH_SPECIES_ERROR = "FETCH_SPECIES_ERROR",
  FETCH_SINGLE_PERSON_SUCCESS = "FETCH_SINGLE_PERSON_SUCCESS",
  FETCH_SINGLE_PERSON_ERROR = "FETCH_SINGLE_PERSON_ERROR",
}

interface FetchPeopleSuccessAction {
  type: AppActionTypes.FETCH_PEOPLE_SUCCESS;
  payload: People[];
}

interface FetchPeopleErrorAction {
  type: AppActionTypes.FETCH_PEOPLE_ERROR;
  payload: string;
}

interface FetchSinglePersonSuccessAction {
  type: AppActionTypes.FETCH_SINGLE_PERSON_SUCCESS;
  payload: People;
}

interface FetchSinglePersonErrorAction {
  type: AppActionTypes.FETCH_SINGLE_PERSON_ERROR;
  payload: string;
}

interface FetchFilmsSuccessAction {
  type: AppActionTypes.FETCH_FILMS_SUCCESS;
  payload: Film[];
}

interface FetchFilmsErrorAction {
  type: AppActionTypes.FETCH_FILMS_ERROR;
  payload: string;
}

interface FetchSpeciesSuccessAction {
  type: AppActionTypes.FETCH_SPECIES_SUCCESS;
  payload: Species[];
}

interface FetchSpeciesErrorAction {
  type: AppActionTypes.FETCH_SPECIES_ERROR;
  payload: string;
}

type AppAction =
  | FetchPeopleSuccessAction
  | FetchPeopleErrorAction
  | FetchFilmsSuccessAction
  | FetchFilmsErrorAction
  | FetchSpeciesSuccessAction
  | FetchSpeciesErrorAction
  | FetchSinglePersonSuccessAction
  | FetchSinglePersonErrorAction;

export { AppActionTypes }
export type { AppAction, FetchPeopleSuccessAction, FetchPeopleErrorAction, FetchSinglePersonSuccessAction, FetchSinglePersonErrorAction, FetchFilmsSuccessAction, FetchFilmsErrorAction, FetchSpeciesSuccessAction, FetchSpeciesErrorAction };




