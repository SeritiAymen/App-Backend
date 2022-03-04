import { Alert, Snackbar } from '@mui/material';
import React from 'react'

export default function Notification(props) {

const {Notify, setNotify} = props;

  return (
<Snackbar
open={Notify.isOpen}
autoHideDuration={3000}>
    <Alert severity={Notify.type}>
        {Notify.message}
    </Alert>
</Snackbar>
    )
}
