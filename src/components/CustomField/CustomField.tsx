import React from "react";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";

export default function CustomField(props: {label: string, type: string, icon: string, value: string, onChange: (value: string) => void, fullWidth?: boolean}) {
  return (
    <FormControl sx={{width: props.fullWidth ? "100%" : "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <span className="material-symbols-outlined">{props.icon}</span>
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
    </FormControl>
  )
}
