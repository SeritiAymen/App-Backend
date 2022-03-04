/** @format */

import React from "react";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import banquePrivee from "../images/bPrivee.png";
import logo from "../images/logo-gbp.svg";
import Buttons from "./Controls/Buttons";

export default function Header(props) {
  const { titre1, titre2, link1, link2 } = props;
  return (
    <AppBar
      position="static"
      style={{ transform: "translateZ(0)", backgroundColor: "#fff" }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <img
              className="LogoBanquePrivee"
              src={banquePrivee}
              alt=""
              style={{ width: "150px", lenght: "150px" }}
            />
            <img
              className="logo"
              src={logo}
              alt=""
              style={{ width: "200px", lenght: "200px" }}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid justifyContent="flex-end">
            <Buttons href={link1} text={titre1} color="warning" />
            <Buttons href={link2} text={titre2} color="warning" />
            <Buttons variant="text" color="warning" text="Seriti Aymen" />
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
