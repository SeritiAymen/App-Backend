import React from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
label={label}
        name={name}
        value={value}
onChange={onChange}
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
</Stack>  );
}
