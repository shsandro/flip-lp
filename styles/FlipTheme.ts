import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7E51DF",
    },
    success: {
      main: "#3AD29F",
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        fontWeight: 700,
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: defaultTheme.palette.grey[700],
      }, 
    },
  },
  typography: {
    fontFamily: `"Gilroy"`,
  },
});

export default theme;