/** @format */

import React from "react";
//import Header from "./components/Header";
//import LoginPage from "./Pages/LoginPage";
//import Navbar from "./components/Navbar";
//import { Route, Router, Switch } from "react-router-dom";
//import SideMenu from "./components/SideMenu";
import { makeStyles, ThemeProvider } from "@mui/styles";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Documents from "./Pages/Documents/Documents";
import EnvoisConseiller from "./Pages/Documents/EnvoisConseiller";
import BDCAdmin from "./Pages/Documents/BDCAdmin";
import ConseillersAdmin from "./Pages/Documents/ConseillersAdmin";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const styles = makeStyles({
  appMain: {
    paddingLeft: "200px",
    width: "100%",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  const classes = styles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/*<Header titre1="Les Bons de caisse" titre2="Les conseillers" />*/}
        <Header
          titre1="Mes enregistrements"
          link1="/enregistrements"
          titre2="Mes envois"
          link2="/envois"
        />
        <Switch>
          <Route path="/enregistrements" component={Documents} />
          <Route path="/envois" component={EnvoisConseiller} />
        </Switch>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
