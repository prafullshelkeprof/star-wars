import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  CssBaseline,
  Theme,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import img from "src/assets/grogu.jpg";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
    position: 'fixed'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: "relative",
  },
  drawerContainer: {
    overflow: "auto",
    paddingTop: theme.mixins.toolbar.height,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: "relative",
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={img} className={classes.logo} alt="background-logo"/>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Star Wars App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Divider />
            <Link to="/films">
              <ListItemButton>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Films" />
              </ListItemButton>
            </Link>
            <Divider />
            <Link to="/people">
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </Link>
            <Divider />
            <Link to="/species">
              <ListItemButton>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="Species" />
              </ListItemButton>
            </Link>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
