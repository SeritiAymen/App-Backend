/** @format */

import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Paper, TableBody, TableCell} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/useTable";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
//import * as DocumentSelect from "../../components/Controls/DocumentSelect";
//const numberFormat = (value) => new Intl.NumberFormat("de-DE").format(value);
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "Conseiller", label: "Conseiller" },
  { id: "Montant", label: "Montant en Charge(en MAD)" },
];

export default function Documents() {
  const classes = useStyles();
  const [records] = useState();
  const { TblHead, TblContainer } = useTable(records, headCells);

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
        title="Les conseillers"
        subtitle="Vous pouvez consulter tous les conseillers du groupe et les montants qu'ils ont en charge."
        icon={<AccountBoxIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  );
}
