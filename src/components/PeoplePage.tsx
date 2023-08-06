import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, CircularProgress, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { fetchPeopleThunk } from "src/store/actions/fetch-people";
import { selectPeople } from "src/store/selectors/people";
import type { People } from "src/store/types/api-types";
import Pagination from "../components/Pagination";
import { selectLoading } from "src/store/selectors/films";

const PeoplePage = () => {
  const dispatch = useAppDispatch();
  const peopleList = useAppSelector(selectPeople);
  const peopleLoading = useAppSelector(selectLoading);
  const itemsPerPage = 3; // Number of people to display per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPeopleThunk());
  }, []);

  const totalPages = Math.ceil(peopleList.length / itemsPerPage);
  const currentPeople = peopleList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Typography variant="h4">Star Wars People</Typography>
      {peopleLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {currentPeople.map((person: People) => (
            <Grid item key={person.name} xs={12} md={6} lg={4}>
              <div>
                <Link to={`/people/${person.url.split("/").reverse()[1]}/`}>
                  <Typography variant="h5">{person.name}</Typography>
                </Link>
                <Typography>{`Height: ${person.height}`}</Typography>
                <Typography>{`Mass: ${person.mass}`}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
      <div style={{ marginTop: "16px" }}>
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PeoplePage;
