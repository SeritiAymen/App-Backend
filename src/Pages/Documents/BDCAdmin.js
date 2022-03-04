/** @format */

import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import DocumentForm from "./DocumentForm";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Paper, TableBody, TableCell} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/useTable";
//import * as DocumentSelect from "../../components/Controls/DocumentSelect";
import Popup from "../../components/Popup";
//const numberFormat = (value) => new Intl.NumberFormat("de-DE").format(value);
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "Radical", label: "Radical" },
  { id: "Conseiller", label: "Conseiller" },
  { id: "BanquePopulaire", label: "Banque Populaire" },
  { id: "Montant", label: "Montant (en MAD)" },
  { id: "Taux", label: "Taux" },
  { id: "Duree", label: "Durée" },
  { id: "DateE", label: "Date d'émission" },
  { id: "DateP", label: "Date de paiement" },
  { id: "TempsR", label: "Temps restant" },
  { id: "Statut", label: "Statut" },
  { id: "actions", label: "" },
];

export default function Documents() {
  const classes = useStyles();
  const [records] = useState();
  const { TblHead, TblContainer } = useTable(records, headCells);
  const [openPopup, setOpenPopup] = useState(false);

  /*const addOrEdit = (Document, resetForm) => {
    if (Document.id === 0) DocumentSelect.insertDocument(Document);
    else DocumentSelect.updateDocument(Document);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(DocumentSelect.getAllDocument());
  };*/

  /*const openInPopup = (item) => {
    setOpenPopup(true);
  };*/

  return (
    <>
      <PageHeader
        title="Les Bons de Caisse"
        subtitle="Vous pouvez consulter les éléments que les conseillers ont mis en ligne."
        icon={<MarkEmailReadIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableBody>
        </TblContainer>
      </Paper>
      <Popup
        title="Formulaire du bon de caisse"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>
        <DocumentForm />
      </Popup>
    </>
  );
}
