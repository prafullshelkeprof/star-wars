import "./App.css";
import Router from "./router/Router";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme

const theme = createTheme({});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
