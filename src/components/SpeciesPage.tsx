import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, CircularProgress, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { fetchSpeciesThunk } from "src/store/actions/fetch-species";
import { selectSpecies } from "src/store/selectors/species";
import type { Species } from "src/store/types/api-types";
import Pagination from "src/components/Pagination";
import { selectLoading } from "src/store/selectors/films";

const SpeciesPage = () => {
  const dispatch = useAppDispatch();
  const speciesList = useAppSelector(selectSpecies);
  const speciesLoading = useAppSelector(selectLoading);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchSpeciesThunk());
  }, []);

  const totalPages = Math.ceil(speciesList.length / itemsPerPage);
  const currentSpecies = speciesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Typography variant="h4">Star Wars Species</Typography>
      {speciesLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {currentSpecies.map((species: Species) => (
            <Grid item key={species.name} xs={12} md={6} lg={4}>
              <Link to={`/species/${species.url.split("/").reverse()[1]}`}>
                <Typography variant="h5">{species.name}</Typography>
              </Link>
              <Typography>Classification: {species.classification}</Typography>
              <Typography>Designation: {species.designation}</Typography>
              <Typography>Average Height: {species.average_height}</Typography>
              <Typography>
                Average Lifespan: {species.average_lifespan}
              </Typography>
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

export default SpeciesPage;
