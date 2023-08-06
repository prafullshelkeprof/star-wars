import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress } from "@mui/material";
import { fetchSpeciesByIdAPI } from "src/store/api";
import { Species } from "src/store/types/api-types";

const SingleSpecies = () => {
  const { id: speciesId = "" } = useParams();
  const [species, setSpecies] = useState<Species | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getSingleSpecies = async () => {
    try {
      const res = await fetchSpeciesByIdAPI(speciesId);
      setSpecies(res.data as Species);
      setLoading(false);
    } catch (err) {
      setError("Error fetching species data.");
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleSpecies();
  }, [speciesId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!species) {
    return <Typography>Species not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h2">{species.name}</Typography>
      <Typography>Classification: {species.classification}</Typography>
      <Typography>Designation: {species.designation}</Typography>
      <Typography>Average Height: {species.average_height}</Typography>
      <Typography>Skin Colors: {species.skin_colors}</Typography>
      <Typography>Hair Colors: {species.hair_colors}</Typography>
      <Typography>Eye Colors: {species.eye_colors}</Typography>
      <Typography>Average Lifespan: {species.average_lifespan}</Typography>
      <Typography>Language: {species.language}</Typography>
    </div>
  );
};

export default SingleSpecies;
