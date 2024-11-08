import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#bdbdbd",
    },
    background: {
      default: "#000",
      paper: "#424242",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#424242",
          },
          "&.Mui-disabled": {
            background: "#424242",
            // borderColor: "#fff",
            // color: "#fff",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "&::before, &::after": {
            borderColor: "#424242",
          },
        },
      },
    },
  },
});

export default theme;
