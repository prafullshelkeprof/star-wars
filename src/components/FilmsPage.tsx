import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { fetchFilmsThunk } from "src/store/actions/fetch-films";
import { selectFilms, selectLoading } from "src/store/selectors/films";
import type { Film } from "src/store/types/api-types";
import Pagination from "./Pagination";

const FilmsPage = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(selectFilms);
  const loading = useAppSelector(selectLoading);

  const [page, setPage] = useState(1);
  const filmsPerPage = 3;
  useEffect(() => {
    dispatch(fetchFilmsThunk());
  }, [dispatch]);

  const totalPages = Math.ceil(films.length / filmsPerPage);

  const startIndex = (page - 1) * filmsPerPage;
  const endIndex = startIndex + filmsPerPage;

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Typography variant="h4">Star Wars Films</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={2}>
            {films.slice(startIndex, endIndex).map((film: Film) => (
              <Grid item key={film.title} xs={12} md={6} lg={4}>
                <div>
                  <Link to={`/films/${film.url.split("/").reverse()[1]}`}>
                    <Typography variant="h5">{film.title}</Typography>
                  </Link>
                  <Typography>{`Director: ${film.director}`}</Typography>
                  <Typography>{`Release Date: ${film.release_date}`}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
          <Pagination
            totalPages={totalPages}
            page={page}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default FilmsPage;
