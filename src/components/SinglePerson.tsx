import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress } from "@mui/material";
import { fetchPersonAPI } from "src/store/api";
import { People } from "src/store/types/api-types";

const SinglePerson = () => {
  const { id: personId = "" } = useParams();
  const [person, setPerson] = useState<People>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getSinglePerson = async () => {
    try {
      const res = await fetchPersonAPI(personId);
      setPerson(res.data as People);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getSinglePerson();
  }, [personId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!person) {
    return <Typography>Person not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h2">{person.name}</Typography>
      <Typography>Height: {person.height}</Typography>
      <Typography>Mass: {person.mass}</Typography>
      <Typography>Hair Color: {person.hair_color}</Typography>
      <Typography>Skin Color: {person.skin_color}</Typography>
      <Typography>Eye Color: {person.eye_color}</Typography>
      <Typography>Birth Year: {person.birth_year}</Typography>
      <Typography>Gender: {person.gender}</Typography>
    </div>
  );
};

export default SinglePerson;
