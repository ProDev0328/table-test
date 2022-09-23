import { createTheme } from "@mui/material/styles";
import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";
import linearGradient from "./functions/linearGradient";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import colors from "./base/colors"
import typography from "./base/typography";
import autocomplete from "./components/form/autocomplete";
import input from "./components/form/input";
import inputLabel from "theme/components/form/inputLabel";
import inputOutlined from "theme/components/form/inputOutlined";
import textField from "theme/components/form/textField";
import card from "theme/components/form/card";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#3DBD3A",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
  borders: { ...borders },
  boxShadows: { ...boxShadows },
  palette: { ...colors },
  typography: { ...typography },
  components: {
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiCard: { ...card },
  },
});
