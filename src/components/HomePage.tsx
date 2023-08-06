import {
  Typography,
  Paper,
  Grid,
  Link,
  List,
  ListItem,
  type Theme,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    maxWidth: 600,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Welcome to the Star Wars App!</Typography>
        <Typography variant="body1">
          This app allows you to explore the Star Wars universe. You can view
          information about films, species, and people from the Star Wars
          series.
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Film Information:</Typography>
            <Typography variant="body1">
              Click on a film title to view detailed information about the film,
              including the episode number, director, release date, and the
              opening crawl text.
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h5">Species Information:</Typography>
            <List>
              <Typography variant="body1">
                Click on a species name to view details such as classification,
                designation, average height, and average lifespan of the
                species.
              </Typography>
            </List>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h5">People Information:</Typography>
            <Typography variant="body1">
              Click on a person's name to view details about their height, mass,
              hair color, skin color, eye color, birth year, and gender.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">How to use:</Typography>
            <List>
              <ListItem className={classes.listItem}>
                Use the sidebar on the left to navigate to different sections of
                the app.
              </ListItem>
              <ListItem className={classes.listItem}>
                Click on "Films" to see a list of all Star Wars films.
              </ListItem>
              <ListItem className={classes.listItem}>
                Click on "Species" to view information about different species
                in the Star Wars universe.
              </ListItem>
              <ListItem className={classes.listItem}>
                Click on "People" to see details about various characters from
                the Star Wars series.
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Typography variant="h5">
          Enjoy exploring the Star Wars universe!
        </Typography>
      </Paper>
    </div>
  );
};

export default HomePage;
