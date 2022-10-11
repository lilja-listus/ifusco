import blue from "@material-ui/core/colors/blue";
import { createTheme, Theme } from "@material-ui/core/styles";

const themeDark: Theme = createTheme({
  palette: {
    primary: { main: blue[200] },
    secondary: { main: blue[400] },
    type: "dark",
  },
});

const themeLight: Theme = createTheme({
  palette: {
    primary: { main: blue[800] },
    secondary: { main: blue[900] },
    type: "light",
  },
});

export { themeDark, themeLight };
