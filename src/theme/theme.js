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
import stepper from "theme/components/form/stepper";
import step from "theme/components/form/stepper/step";
import stepConnector from "theme/components/form/stepper/stepConnector";
import stepLabel from "theme/components/form/stepper/stepLabel";
import stepIcon from "theme/components/form/stepper/stepIcon";
import button from "theme/components/form/button";
import buttonBase from "theme/components/form/buttonBase";

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
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiButton: { ...button },
    MuiButtonBase: { ...buttonBase }
  },
});
