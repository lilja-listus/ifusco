import grey from "@material-ui/core/colors/grey";
import { createTheme, Theme } from "@material-ui/core/styles";

const themeDark: Theme = createTheme({
  palette: {
    primary: { main: grey[200] },
    secondary: { main: grey[400] },
    type: "dark",
  },
});

const themeLight: Theme = createTheme({
  palette: {
    primary: { main: grey[800] },
    secondary: { main: grey[900] },
    type: "light",
  },
});

export { themeDark, themeLight };
