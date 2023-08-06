import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { fetchFilmAPI } from "src/store/api";
import { Film } from "src/store/types/api-types";
import { Link } from "react-router-dom";

const SingleFilm = () => {
  const { id: filmId = "" } = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSingleFilm = async () => {
    try {
      const res = await fetchFilmAPI(filmId);
      setFilm(res.data as Film);
      setLoading(false);
    } catch (err) {
      setError("Error fetching film data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleFilm();
  }, [filmId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!film) {
    return <Typography>Film not found</Typography>;
  }
  const getLastIdFromURL = (url: string) => {
    const id = url
      .split("/")
      .filter((part) => part !== "")
      .pop();
    return id ? id : "";
  };
  return (
    <div>
      <Typography variant="h2">{film.title}</Typography>
      <Typography variant="h5">Episode {film.episode_id}</Typography>
      <Typography variant="subtitle1">
        Directed by: {film.director}, Produced by: {film.producer}
      </Typography>
      <Typography variant="subtitle1">
        Release Date: {film.release_date}
      </Typography>
      <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
        {film.opening_crawl}
      </Typography>
      <Typography variant="h6">Characters:</Typography>
      <List>
        {film.characters.map((character, index) => (
          <ListItem
            key={index}
            component={Link}
            to={`/people/${getLastIdFromURL(character)}`}
          >
            <ListItemText
              primary={"character " + getLastIdFromURL(character)}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Species:</Typography>
      <List>
        {film.species.map((specie, index) => (
          <ListItem
            key={index}
            component={Link}
            to={`/species/${getLastIdFromURL(specie)}`}
          >
            <ListItemText primary={"species " + getLastIdFromURL(specie)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SingleFilm;
