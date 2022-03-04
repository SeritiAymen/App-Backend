/** @format */

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Buttons from "./Controls/Buttons";
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';


export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog} = props;
  return (
    <Dialog open={confirmDialog.isOpen} >
      <DialogTitle style={{textAlign:"center"}}>
        <IconButton disableRipple >
          <NotListedLocationIcon fontSize="large" color={confirmDialog.color} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Buttons
          text="Non"
          color="inherit"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Buttons
          text="Oui"
          color={confirmDialog.color}
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
      </DialogActions>
    </Dialog>
  );
}
